import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch RSS feed from your Blogger
    const rssUrl = 'https://orangepiemedia.blogspot.com/feeds/posts/default?alt=rss';
    const response = await fetch(rssUrl);
    
    if (!response.ok) {
      throw new Error('Failed to fetch RSS feed');
    }
    
    const xmlText = await response.text();
    
    // Parse XML to extract blog posts
    const posts = parseRSSFeed(xmlText);
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  link: string;
}

function parseRSSFeed(xmlText: string) {
  const posts: BlogPost[] = [];
  
  try {
    // Simple XML parsing for RSS feed
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    
    while ((match = itemRegex.exec(xmlText)) !== null && posts.length < 10) {
      const itemContent = match[1];
      
      const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
      const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
      const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
      const descriptionMatch = itemContent.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/);
      
      if (titleMatch && linkMatch) {
        const title = titleMatch[1].trim();
        const link = linkMatch[1].trim();
        const pubDate = pubDateMatch ? pubDateMatch[1].trim() : new Date().toISOString();
        const description = descriptionMatch ? descriptionMatch[1].trim() : '';
        
        // Clean up description (remove HTML tags)
        const cleanDescription = description
          .replace(/<[^>]*>/g, '')
          .replace(/&nbsp;/g, ' ')
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .substring(0, 150) + '...';
        
        // Estimate read time (rough calculation)
        const wordCount = cleanDescription.split(' ').length;
        const readTime = Math.max(1, Math.ceil(wordCount / 200)) + ' min read';
        
        posts.push({
          id: link.split('/').pop() || Math.random().toString(),
          title,
          excerpt: cleanDescription,
          date: new Date(pubDate).toISOString().split('T')[0],
          readTime,
          category: 'Blog Post',
          link
        });
      }
    }
  } catch (error) {
    console.error('Error parsing RSS feed:', error);
  }
  
  return posts;
}

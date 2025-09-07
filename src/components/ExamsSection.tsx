"use client";

type Exam = {
  name: string;
  application: string;
  date: string;
  result: string;
  status: "Self-prepare" | "Prepared" | "Pipeline" | "Pipeline - Start";
};

type Country = {
  name: string;
  exams: Exam[];
};

const data: Country[] = [

  {
    name: "USA",
    exams: [
      {
        name: "SAT",
        application: "Varies per test date",
        date: "7 times/year (Mar, May, Jun, Aug, Oct, Nov, Dec)",
        result: "~2 weeks after exam",
        status: "Prepared",
      },
    ],
  },

  {
    name: "Australia",
    exams: [
      {
        name: "ATAR (Maths Specialist, etc.)",
        application: "Feb–Aug (in-school)",
        date: "Oct–Nov (Year 12 final exams)",
        result: "Dec (ATAR released state-wise)",
        status: "Self-prepare",
      },
    ],
  },
  {
    name: "Canada",
    exams: [
      {
        name: "CEMS",
        application: "Different timeline",
        date: "Different timeline",
        result: "Different timeline",
        status: "Pipeline - Start",
      },
    ],
  },  {
    name: "India",
    exams: [
      {
        name: "JEE Main",
        application: "Nov–Dec (previous year)",
        date: "Jan (Session 1), Apr (S2)",
        result: "Feb (S1), May (S2)",
        status: "Self-prepare",
      },
      {
        name: "JEE Advanced",
        application: "Apr–May (after JEE Main)",
        date: "Late May or early June",
        result: "~2 weeks after exam",
        status: "Self-prepare",
      },
      {
        name: "Olympiad",
        application: "-",
        date: "-",
        result: "-",
        status: "Prepared",
      },
      
    ],
  },
  {
    name: "UK",
    exams: [
      {
        name: "STEP (Cambridge, Warwick, etc.)",
        application: "Feb–Apr",
        date: "Early June (STEP 2, 3)",
        result: "~Mid Aug (A-Level result day)",
        status: "Pipeline",
      },
      {
        name: "MAT (Oxford)",
        application: "Sep–Oct",
        date: "Late October",
        result: "Jan (shortlisting basis)",
        status: "Pipeline",
      },
    ],
  },
];

const statusColors: Record<Exam["status"], string> = {
  "Self-prepare": "bg-yellow-100 text-yellow-700",
  Prepared: "bg-green-100 text-green-700",
  Pipeline: "bg-orange-100 text-orange-700",
  "Pipeline - Start": "bg-red-100 text-red-700",
};

export default function ExamsSection() {
  return (
    <section className="max-w-full mx-auto px-6 py-12 bg-primary">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Global Math Exam Tracker
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.map((country, idx) => (
          <div
            key={idx}
            className="rounded-2xl border shadow-md bg-white flex flex-col"
          >
            <div className="px-6 py-4 border-b border-white">
              <h3 className="text-xl font-semibold text-black">
                {country.name}
              </h3>
            </div>
            <div className="p-6 space-y-4">
              {country.exams.map((exam, i) => (
                <div
                  key={i}
                  className="p-4 border rounded-lg hover:shadow-sm transition bg-white"
                >
                  <h4 className="font-bold text-gray-800">{exam.name}</h4>
                  <p className="text-sm text-gray-600">
                    <strong>Application:</strong> {exam.application}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Exam Date(s):</strong> {exam.date}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Result:</strong> {exam.result}
                  </p>
                  <span
                    className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full ${statusColors[exam.status]}`}
                  >
                    {exam.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-white">
        * For Canada, refer{" "}
        <span className="font-semibold">“Canadian system (detail)”</span> for
        more information
        <br />
        <span className="text-green-500 font-medium">
          Content in green to be referred to update on website
        </span>
      </div>
    </section>
  );
}

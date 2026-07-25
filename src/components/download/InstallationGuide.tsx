import {
  Download,
  FolderOpen,
  MousePointerClick,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Download",
    description: "Download the latest Nova Fetch installer.",
  },
  {
    icon: FolderOpen,
    title: "Open Installer",
    description: "Run the downloaded setup file.",
  },
  {
    icon: MousePointerClick,
    title: "Install",
    description: "Follow the installation wizard.",
  },
  {
    icon: CheckCircle2,
    title: "Launch",
    description: "Open Nova Fetch and start downloading.",
  },
];

export default function InstallationGuide() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black text-white">Installation Guide</h2>

          <p className="mt-4 text-gray-400">
            Install Nova Fetch in less than two minutes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500">
                  <Icon className="text-white" size={28} />
                </div>

                <span className="text-sm text-violet-400">
                  Step {index + 1}
                </span>

                <h3 className="mt-3 text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-400">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

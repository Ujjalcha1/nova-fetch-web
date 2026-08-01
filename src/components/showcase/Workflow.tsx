import { workflowSteps } from "@/data/showcase";

export default function Workflow() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {workflowSteps.map((step, index) => {
        const Icon = step.icon;

        return (
          <div key={step.step} className="relative">
            {index < workflowSteps.length - 1 && (
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-10 hidden h-px w-full bg-linear-to-r from-violet-500/40 to-fuchsia-500/10 md:block"
              />
            )}

            <div className="relative flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-r from-violet-600 to-fuchsia-500 shadow-lg">
                <Icon className="h-9 w-9 text-white" aria-hidden="true" />
              </div>

              <span className="mt-6 text-sm font-bold tracking-widest text-violet-400">
                STEP {step.step}
              </span>

              <h3 className="mt-2 text-xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

import { testimonials } from "@/data/testimonials";

import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <Heading
        badge="TESTIMONIALS"
        title="Loved by thousands of users"
        description="Creators, developers and professionals trust Nova Fetch every day."
      />

      <div className="mt-20 grid gap-8 lg:grid-cols-3">
        {testimonials.map((item) => (
          <TestimonialCard key={item.id} {...item} />
        ))}
      </div>
    </Section>
  );
}

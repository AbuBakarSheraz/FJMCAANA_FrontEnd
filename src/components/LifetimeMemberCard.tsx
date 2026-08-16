import Image from "next/image";

type LifetimeMember = {
  name: string;
  year: string;
  image: string;
};

export default function LifetimeMemberCard({
  member,
}: {
  member: LifetimeMember;
}) {
  return (
    <article className="group">
      <div className="relative aspect-[4.5/5] overflow-hidden rounded-2xl bg-sage/20">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 29vw"
          quality={90}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="pt-4 px-1">
        <h2 className="font-display text-lg font-semibold leading-tight text-pine-dark">
          {member.name}
        </h2>

        {member.year && (
          <p className="mt-1 text-sm text-ink-soft">
            Class of {member.year}
          </p>
        )}
      </div>
    </article>
  );
}
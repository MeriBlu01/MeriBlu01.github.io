type InvitationTitleProps = {
  title: string;
};

export default function InvitationTitle({ title }: InvitationTitleProps) {
  return (
    <h1 className="text-3xl font-bold text-center sm:text-left">{title}</h1>
  );
}

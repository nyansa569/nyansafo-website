import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/nyansa_logo.png"
      alt="Nyansafo hero image"
      width={120}
      height={60}

      style={{
        margin:"auto"
      }}
    />
  );
}
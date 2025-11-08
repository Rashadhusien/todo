import Image from "next/image";
import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const buttonClass = ` body-medium text-white-50 min-h-12 flex-1 rounded-2 px-4 py-3.5 cursor-pointer`;

  return (
    <div className="mt-5 flex flex-wrap gap-2.5 ">
      <Button className={buttonClass} variant="ghost">
        <Image
          src={"/icons/google.svg"}
          alt="google logo"
          width={20}
          height={20}
          className=" mr-2.5 object-contain"
        />
        <span>Continue with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;

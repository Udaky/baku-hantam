import { AddButton } from "@/app/@components/button";
import { SITE_CONFIG } from "@/lib/const";

export const Header = () => {
  return (
    <div className="bg-white px-6 py-12 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-balance">
          Debat Tech Twitter Indonesia
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-balance">
          Nikmati debatnya, serap ilmunya, abaikan lainnya
        </p>

        <div className="mt-2">
          <AddButton
            href={SITE_CONFIG.CREATE_ISSUE("Tambahkan tweet untuk topik baru")}
          >
            Tambahkan Tweet
          </AddButton>
        </div>
      </div>
    </div>
  );
};

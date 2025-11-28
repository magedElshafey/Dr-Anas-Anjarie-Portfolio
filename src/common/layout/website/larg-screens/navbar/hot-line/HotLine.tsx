import Loader from "@/common/components/loader/spinner/Loader";
import useGetWebsiteSettings from "@/features/settings/api/useGetWebsiteSettings";
interface HotLineProps {
  hotline: string;
}

const HotLine: React.FC<HotLineProps> = () => {
  const { data, isLoading } = useGetWebsiteSettings();
  return (
    <div className="flex flex-col gap-1">
      <a
        href={`https://wa.me/${data?.hot_line}`}
        dir="ltr"
        className="text-md xl:text-xl font-bold"
      >
        {isLoading ? <Loader /> : data?.hot_line}
      </a>
    </div>
  );
};

export default HotLine;

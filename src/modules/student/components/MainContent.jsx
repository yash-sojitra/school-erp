import HomeCarousel from './HomeCarousel'
import MarksGraph from './MarksGraph';

const MainContent = () => {
  return (
    <div className="w-full md:w-8/12 flex flex-col items-center mx-6 md:mr-0">
      <HomeCarousel />
      <MarksGraph/>
    </div>
  );
};

export default MainContent;

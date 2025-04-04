import { useRef, useState } from "react";
import "../assets/css/bootstrap.min.css";

const GIMHindiBook = () => {
  const images = [
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0001.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0002.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0003.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0004.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0005.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0006.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0007.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0008.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0009.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0010.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0011.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0012.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0013.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0014.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0015.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0016.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0017.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0018.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0019.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0020.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0021.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0022.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0023.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0024.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0025.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0026.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0027.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0028.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0029.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0030.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0031.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0032.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0033.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0034.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0035.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0036.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0037.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0038.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0039.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0040.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0041.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0042.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0043.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0044.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0045.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0046.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0047.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0048.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0049.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0050.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0051.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0052.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0053.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0054.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0055.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0056.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0057.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0058.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0059.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0060.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0061.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0062.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0063.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0064.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0065.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0066.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0067.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0068.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0069.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0070.webp",
    "/images/gim-hindi/group-instructor-masterclass-hindi_page-0071.webp",
  ];
  const imageRefs = useRef([]);
  const [inputValue, setInputValue] = useState("1");

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setInputValue("");
      return;
    }

    const page = parseInt(value, 10);
    if (!isNaN(page) && page >= 1 && page <= images.length) {
      setInputValue(value);

      imageRefs.current[page - 1]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="bg-pdf-gray">
      <div className="pdf-container">
        <div className="pdf-toolbar">
          <div className="pdf-header ps-4">
            <h4 className="text-white text-md-start text-center">
              Group Instructor Masterclass - Hindi
            </h4>
          </div>
          <div>
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
            />
            <span className="mx-2">/</span>
            <span>{images.length}</span>
          </div>
        </div>
        <div className="pdf-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Page ${index + 1}`}
              ref={(el) => (imageRefs.current[index] = el)}
              className="page-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GIMHindiBook;

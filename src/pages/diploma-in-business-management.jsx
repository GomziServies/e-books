import { useRef, useState } from "react";
import "../assets/css/bootstrap.min.css";

const DBMBook = () => {
  const images = [
    "/images/dbm/diploma-in-business-management_page-0001.jpg",
    "/images/dbm/diploma-in-business-management_page-0002.jpg",
    "/images/dbm/diploma-in-business-management_page-0003.jpg",
    "/images/dbm/diploma-in-business-management_page-0004.jpg",
    "/images/dbm/diploma-in-business-management_page-0005.jpg",
    "/images/dbm/diploma-in-business-management_page-0006.jpg",
    "/images/dbm/diploma-in-business-management_page-0007.jpg",
    "/images/dbm/diploma-in-business-management_page-0008.jpg",
    "/images/dbm/diploma-in-business-management_page-0009.jpg",
    "/images/dbm/diploma-in-business-management_page-0010.jpg",
    "/images/dbm/diploma-in-business-management_page-0011.jpg",
    "/images/dbm/diploma-in-business-management_page-0012.jpg",
    "/images/dbm/diploma-in-business-management_page-0013.jpg",
    "/images/dbm/diploma-in-business-management_page-0014.jpg",
    "/images/dbm/diploma-in-business-management_page-0015.jpg",
    "/images/dbm/diploma-in-business-management_page-0016.jpg",
    "/images/dbm/diploma-in-business-management_page-0017.jpg",
    "/images/dbm/diploma-in-business-management_page-0018.jpg",
    "/images/dbm/diploma-in-business-management_page-0019.jpg",
    "/images/dbm/diploma-in-business-management_page-0020.jpg",
    "/images/dbm/diploma-in-business-management_page-0021.jpg",
    "/images/dbm/diploma-in-business-management_page-0022.jpg",
    "/images/dbm/diploma-in-business-management_page-0023.jpg",
    "/images/dbm/diploma-in-business-management_page-0024.jpg",
    "/images/dbm/diploma-in-business-management_page-0025.jpg",
    "/images/dbm/diploma-in-business-management_page-0026.jpg",
    "/images/dbm/diploma-in-business-management_page-0027.jpg",
    "/images/dbm/diploma-in-business-management_page-0028.jpg",
    "/images/dbm/diploma-in-business-management_page-0029.jpg",
    "/images/dbm/diploma-in-business-management_page-0030.jpg",
    "/images/dbm/diploma-in-business-management_page-0031.jpg",
    "/images/dbm/diploma-in-business-management_page-0032.jpg",
    "/images/dbm/diploma-in-business-management_page-0033.jpg",
    "/images/dbm/diploma-in-business-management_page-0034.jpg",
    "/images/dbm/diploma-in-business-management_page-0035.jpg",
    "/images/dbm/diploma-in-business-management_page-0036.jpg",
    "/images/dbm/diploma-in-business-management_page-0037.jpg",
    "/images/dbm/diploma-in-business-management_page-0038.jpg",
    "/images/dbm/diploma-in-business-management_page-0039.jpg",
    "/images/dbm/diploma-in-business-management_page-0040.jpg",
    "/images/dbm/diploma-in-business-management_page-0041.jpg",
    "/images/dbm/diploma-in-business-management_page-0042.jpg",
    "/images/dbm/diploma-in-business-management_page-0043.jpg",
    "/images/dbm/diploma-in-business-management_page-0044.jpg",
    "/images/dbm/diploma-in-business-management_page-0045.jpg",
    "/images/dbm/diploma-in-business-management_page-0046.jpg",
    "/images/dbm/diploma-in-business-management_page-0047.jpg",
    "/images/dbm/diploma-in-business-management_page-0048.jpg",
    "/images/dbm/diploma-in-business-management_page-0049.jpg",
    "/images/dbm/diploma-in-business-management_page-0050.jpg",
    "/images/dbm/diploma-in-business-management_page-0051.jpg",
    "/images/dbm/diploma-in-business-management_page-0052.jpg",
    "/images/dbm/diploma-in-business-management_page-0053.jpg",
    "/images/dbm/diploma-in-business-management_page-0054.jpg",
    "/images/dbm/diploma-in-business-management_page-0055.jpg",
    "/images/dbm/diploma-in-business-management_page-0056.jpg",
    "/images/dbm/diploma-in-business-management_page-0057.jpg",
    "/images/dbm/diploma-in-business-management_page-0058.jpg",
    "/images/dbm/diploma-in-business-management_page-0059.jpg",
    "/images/dbm/diploma-in-business-management_page-0060.jpg",
    "/images/dbm/diploma-in-business-management_page-0061.jpg",
    "/images/dbm/diploma-in-business-management_page-0062.jpg",
    "/images/dbm/diploma-in-business-management_page-0063.jpg",
    "/images/dbm/diploma-in-business-management_page-0064.jpg",
    "/images/dbm/diploma-in-business-management_page-0065.jpg",
    "/images/dbm/diploma-in-business-management_page-0066.jpg",
    "/images/dbm/diploma-in-business-management_page-0067.jpg",
    "/images/dbm/diploma-in-business-management_page-0068.jpg",
    "/images/dbm/diploma-in-business-management_page-0069.jpg",
    "/images/dbm/diploma-in-business-management_page-0070.jpg",
    "/images/dbm/diploma-in-business-management_page-0071.jpg",
    "/images/dbm/diploma-in-business-management_page-0072.jpg",
    "/images/dbm/diploma-in-business-management_page-0073.jpg",
    "/images/dbm/diploma-in-business-management_page-0074.jpg",
    "/images/dbm/diploma-in-business-management_page-0075.jpg",
    "/images/dbm/diploma-in-business-management_page-0076.jpg",
    "/images/dbm/diploma-in-business-management_page-0077.jpg",
    "/images/dbm/diploma-in-business-management_page-0078.jpg",
    "/images/dbm/diploma-in-business-management_page-0079.jpg",
    "/images/dbm/diploma-in-business-management_page-0080.jpg",
    "/images/dbm/diploma-in-business-management_page-0081.jpg",
    "/images/dbm/diploma-in-business-management_page-0082.jpg",
    "/images/dbm/diploma-in-business-management_page-0083.jpg",
    "/images/dbm/diploma-in-business-management_page-0084.jpg",
    "/images/dbm/diploma-in-business-management_page-0085.jpg",
    "/images/dbm/diploma-in-business-management_page-0086.jpg",
    "/images/dbm/diploma-in-business-management_page-0087.jpg",
    "/images/dbm/diploma-in-business-management_page-0088.jpg",
    "/images/dbm/diploma-in-business-management_page-0089.jpg",
    "/images/dbm/diploma-in-business-management_page-0090.jpg",
    "/images/dbm/diploma-in-business-management_page-0091.jpg",
    "/images/dbm/diploma-in-business-management_page-0092.jpg",
    "/images/dbm/diploma-in-business-management_page-0093.jpg",
    "/images/dbm/diploma-in-business-management_page-0094.jpg",
    "/images/dbm/diploma-in-business-management_page-0095.jpg",
    "/images/dbm/diploma-in-business-management_page-0096.jpg",
    "/images/dbm/diploma-in-business-management_page-0097.jpg",
    "/images/dbm/diploma-in-business-management_page-0098.jpg",
    "/images/dbm/diploma-in-business-management_page-0099.jpg",
    "/images/dbm/diploma-in-business-management_page-0100.jpg",
    "/images/dbm/diploma-in-business-management_page-0101.jpg",
    "/images/dbm/diploma-in-business-management_page-0102.jpg",
    "/images/dbm/diploma-in-business-management_page-0103.jpg",
    "/images/dbm/diploma-in-business-management_page-0104.jpg",
    "/images/dbm/diploma-in-business-management_page-0105.jpg",
    "/images/dbm/diploma-in-business-management_page-0106.jpg",
    "/images/dbm/diploma-in-business-management_page-0107.jpg",
    "/images/dbm/diploma-in-business-management_page-0108.jpg",
    "/images/dbm/diploma-in-business-management_page-0109.jpg",
    "/images/dbm/diploma-in-business-management_page-0110.jpg",
    "/images/dbm/diploma-in-business-management_page-0111.jpg",
    "/images/dbm/diploma-in-business-management_page-0112.jpg",
    "/images/dbm/diploma-in-business-management_page-0113.jpg",
    "/images/dbm/diploma-in-business-management_page-0114.jpg",
    "/images/dbm/diploma-in-business-management_page-0115.jpg",
    "/images/dbm/diploma-in-business-management_page-0116.jpg",
    "/images/dbm/diploma-in-business-management_page-0117.jpg",
    "/images/dbm/diploma-in-business-management_page-0118.jpg",
    "/images/dbm/diploma-in-business-management_page-0119.jpg",
    "/images/dbm/diploma-in-business-management_page-0120.jpg",
    "/images/dbm/diploma-in-business-management_page-0121.jpg",
    "/images/dbm/diploma-in-business-management_page-0122.jpg",
    "/images/dbm/diploma-in-business-management_page-0123.jpg",
    "/images/dbm/diploma-in-business-management_page-0124.jpg",
    "/images/dbm/diploma-in-business-management_page-0125.jpg",
    "/images/dbm/diploma-in-business-management_page-0126.jpg",
    "/images/dbm/diploma-in-business-management_page-0127.jpg",
    "/images/dbm/diploma-in-business-management_page-0128.jpg",
    "/images/dbm/diploma-in-business-management_page-0129.jpg",
    "/images/dbm/diploma-in-business-management_page-0130.jpg",
    "/images/dbm/diploma-in-business-management_page-0131.jpg",
    "/images/dbm/diploma-in-business-management_page-0132.jpg",
    "/images/dbm/diploma-in-business-management_page-0133.jpg",
    "/images/dbm/diploma-in-business-management_page-0134.jpg",
    "/images/dbm/diploma-in-business-management_page-0135.jpg",
    "/images/dbm/diploma-in-business-management_page-0136.jpg",
    "/images/dbm/diploma-in-business-management_page-0137.jpg",
    "/images/dbm/diploma-in-business-management_page-0138.jpg",
    "/images/dbm/diploma-in-business-management_page-0139.jpg",
    "/images/dbm/diploma-in-business-management_page-0140.jpg",
    "/images/dbm/diploma-in-business-management_page-0141.jpg",
    "/images/dbm/diploma-in-business-management_page-0142.jpg",
    "/images/dbm/diploma-in-business-management_page-0143.jpg",
    "/images/dbm/diploma-in-business-management_page-0144.jpg",
    "/images/dbm/diploma-in-business-management_page-0145.jpg",
    "/images/dbm/diploma-in-business-management_page-0146.jpg",
    "/images/dbm/diploma-in-business-management_page-0147.jpg",
    "/images/dbm/diploma-in-business-management_page-0148.jpg",
    "/images/dbm/diploma-in-business-management_page-0149.jpg",
    "/images/dbm/diploma-in-business-management_page-0150.jpg",
    "/images/dbm/diploma-in-business-management_page-0151.jpg",
    "/images/dbm/diploma-in-business-management_page-0152.jpg",
    "/images/dbm/diploma-in-business-management_page-0153.jpg",
    "/images/dbm/diploma-in-business-management_page-0154.jpg",
    "/images/dbm/diploma-in-business-management_page-0155.jpg",
    "/images/dbm/diploma-in-business-management_page-0156.jpg",
    "/images/dbm/diploma-in-business-management_page-0157.jpg",
    "/images/dbm/diploma-in-business-management_page-0158.jpg",
    "/images/dbm/diploma-in-business-management_page-0159.jpg",
    "/images/dbm/diploma-in-business-management_page-0160.jpg",
    "/images/dbm/diploma-in-business-management_page-0161.jpg",
    "/images/dbm/diploma-in-business-management_page-0162.jpg",
    "/images/dbm/diploma-in-business-management_page-0163.jpg",
    "/images/dbm/diploma-in-business-management_page-0164.jpg",
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
            Diploma In Business Management
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

export default DBMBook;

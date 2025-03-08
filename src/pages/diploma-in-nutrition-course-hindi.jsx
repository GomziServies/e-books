import { useRef, useState } from "react";
import "../assets/css/bootstrap.min.css";

const DNCHindiBook = () => {
  const images = [
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0001.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0002.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0003.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0004.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0005.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0006.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0007.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0008.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0009.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0010.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0011.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0012.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0013.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0014.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0015.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0016.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0017.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0018.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0019.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0020.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0021.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0022.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0023.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0024.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0025.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0026.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0027.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0028.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0029.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0030.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0031.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0032.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0033.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0034.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0035.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0036.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0037.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0038.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0039.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0040.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0041.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0042.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0043.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0044.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0045.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0046.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0047.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0048.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0049.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0050.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0051.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0052.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0053.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0054.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0055.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0056.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0057.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0058.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0059.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0060.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0061.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0062.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0063.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0064.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0065.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0066.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0067.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0068.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0069.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0070.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0071.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0072.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0073.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0074.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0075.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0076.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0077.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0078.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0079.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0080.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0081.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0082.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0083.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0084.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0085.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0086.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0087.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0088.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0089.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0090.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0091.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0092.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0093.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0094.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0095.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0096.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0097.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0098.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0099.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0100.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0101.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0102.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0103.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0104.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0105.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0106.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0107.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0108.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0109.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0110.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0111.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0112.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0113.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0114.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0115.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0116.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0117.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0118.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0119.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0120.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0121.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0122.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0123.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0124.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0125.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0126.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0127.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0128.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0129.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0130.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0131.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0132.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0133.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0134.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0135.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0136.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0137.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0138.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0139.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0140.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0141.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0142.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0143.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0144.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0145.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0146.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0147.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0148.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0149.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0150.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0151.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0152.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0153.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0154.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0155.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0156.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0157.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0158.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0159.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0160.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0161.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0162.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0163.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0164.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0165.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0166.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0167.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0168.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0169.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0170.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0171.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0172.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0173.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0174.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0175.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0176.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0177.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0178.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0179.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0180.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0181.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0182.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0183.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0184.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0185.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0186.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0187.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0188.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0189.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0190.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0191.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0192.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0193.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0194.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0195.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0196.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0197.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0198.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0199.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0200.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0201.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0202.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0203.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0204.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0205.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0206.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0207.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0208.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0209.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0210.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0211.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0212.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0213.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0214.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0215.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0216.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0217.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0218.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0219.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0220.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0221.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0222.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0223.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0224.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0225.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0226.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0227.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0228.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0229.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0230.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0231.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0232.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0233.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0234.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0235.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0236.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0237.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0238.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0239.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0240.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0241.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0242.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0243.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0244.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0245.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0246.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0247.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0248.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0249.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0250.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0251.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0252.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0253.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0254.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0255.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0256.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0257.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0258.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0259.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0260.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0261.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0262.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0263.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0264.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0265.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0266.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0267.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0268.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0269.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0270.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0271.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0272.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0273.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0274.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0275.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0276.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0277.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0278.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0279.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0280.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0281.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0282.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0283.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0284.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0285.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0286.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0287.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0288.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0289.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0290.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0291.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0292.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0293.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0294.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0295.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0296.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0297.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0298.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0299.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0300.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0301.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0302.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0303.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0304.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0305.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0306.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0307.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0308.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0309.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0310.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0311.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0312.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0313.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0314.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0315.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0316.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0317.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0318.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0319.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0320.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0321.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0322.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0323.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0324.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0325.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0326.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0327.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0328.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0329.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0330.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0331.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0332.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0333.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0334.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0335.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0336.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0337.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0338.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0339.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0340.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0341.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0342.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0343.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0344.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0345.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0346.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0347.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0348.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0349.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0350.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0351.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0352.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0353.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0354.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0355.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0356.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0357.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0358.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0359.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0360.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0361.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0362.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0363.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0364.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0365.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0366.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0367.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0368.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0369.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0370.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0371.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0372.webp",
    "/images/dnc-hindi/diploma-in-nutrition-course-hindi_page-0373.webp",
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
              Diploma In Nutrition Course - Hindi
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

export default DNCHindiBook;

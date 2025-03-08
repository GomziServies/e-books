import { useRef, useState } from "react";
import "../assets/css/bootstrap.min.css";

const DPTHindiBook = () => {
  const images = [
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_1.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_2.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_3.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_4.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_5.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_6.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_7.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_8.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_9.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_10.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_11.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_12.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_13.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_14.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_15.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_16.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_17.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_18.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_19.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_20.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_21.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_22.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_23.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_24.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_25.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_26.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_27.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_28.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_29.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_30.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_31.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_32.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_33.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_34.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_35.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_36.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_37.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_38.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_39.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_40.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_41.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_42.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_43.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_44.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_45.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_46.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_47.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_48.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_49.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_50.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_51.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_52.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_53.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_54.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_55.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_56.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_57.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_58.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_59.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_60.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_61.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_62.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_63.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_64.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_65.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_66.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_67.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_68.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_69.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_70.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_71.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_72.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_73.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_74.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_75.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_76.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_77.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_78.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_79.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_80.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_81.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_82.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_83.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_84.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_85.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_86.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_87.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_88.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_89.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_90.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_91.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_92.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_93.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_94.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_95.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_96.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_97.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_98.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_99.webp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_100.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_101.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_102.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_103.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_104.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_105.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_106.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_107.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_108.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_109.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_110.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_111.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_112.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_113.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_114.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_115.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_116.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_117.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_118.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_119.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_120.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_121.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_122.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_123.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_124.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_125.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_126.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_127.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_128.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_129.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_130.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_131.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_132.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_133.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_134.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_135.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_136.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_137.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_138.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_139.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_140.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_141.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_142.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_143.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_144.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_145.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_146.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_147.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_148.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_149.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_150.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_151.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_152.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_153.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_154.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_155.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_156.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_157.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_158.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_159.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_160.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_161.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_162.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_163.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_164.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_165.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_166.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_167.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_168.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_169.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_170.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_171.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_172.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_173.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_174.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_175.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_176.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_177.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_178.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_179.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_180.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_181.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_182.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_183.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_184.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_185.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_186.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_187.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_188.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_189.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_190.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_191.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_192.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_193.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_194.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_195.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_196.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_197.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_198.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_199.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_200.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_201.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_202.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_203.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_204.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_205.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_206.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_207.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_208.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_209.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_210.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_211.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_212.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_213.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_214.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_215.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_216.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_217.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_218.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_219.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_220.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_221.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_222.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_223.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_224.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_225.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_226.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_227.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_228.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_229.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_230.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_231.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_232.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_233.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_234.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_235.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_236.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_237.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_238.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_239.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_240.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_241.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_242.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_243.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_244.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_245.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_246.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_247.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_248.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_249.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_250.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_251.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_252.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_253.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_254.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_255.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_256.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_257.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_258.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_259.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_260.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_261.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_262.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_263.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_264.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_265.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_266.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_267.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_268.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_269.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_270.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_271.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_272.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_273.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_274.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_275.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_276.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_277.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_278.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_279.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_280.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_281.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_282.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_283.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_284.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_285.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_286.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_287.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_288.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_289.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_290.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_291.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_292.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_293.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_294.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_295.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_296.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_297.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_298.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_299.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_300.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_301.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_302.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_303.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_304.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_305.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_306.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_307.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_308.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_309.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_310.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_311.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_312.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_313.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_314.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_315.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_316.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_317.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_318.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_319.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_320.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_321.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_322.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_323.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_324.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_325.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_326.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_327.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_328.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_329.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_330.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_331.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_332.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_333.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_334.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_335.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_336.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_337.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_338.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_339.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_340.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_341.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_342.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_343.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_344.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_345.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_346.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_347.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_348.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_349.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_350.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_351.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_352.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_353.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_354.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_355.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_356.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_357.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_358.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_359.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_360.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_361.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_362.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_363.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_364.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_365.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_366.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_367.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_368.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_369.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_370.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_371.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_372.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_373.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_374.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_375.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_376.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_377.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_378.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_379.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_380.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_381.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_382.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_383.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_384.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_385.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_386.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_387.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_388.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_389.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_390.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_391.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_392.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_393.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_394.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_395.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_396.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_397.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_398.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_399.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_400.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_401.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_402.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_403.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_404.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_405.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_406.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_407.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_408.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_409.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_410.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_411.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_412.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_413.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_414.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_415.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_416.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_417.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_418.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_419.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_420.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_421.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_422.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_423.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_424.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_425.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_426.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_427.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_428.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_429.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_430.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_431.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_432.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_433.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_434.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_435.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_436.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_437.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_438.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_439.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_440.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_441.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_442.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_443.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_444.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_445.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_446.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_447.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_448.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_449.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_450.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_451.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_452.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_453.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_454.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_455.jp",
    "/images/dpt-hindi/1741351443173-57740b07-ffc5-4835-bed6-f0106563d4be_456.webp",
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
              Diploma In Personal Training - Hindi
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

export default DPTHindiBook;

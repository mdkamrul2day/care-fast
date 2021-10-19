const healthData = [
  {
    id: '101',
    name: 'AAROGYAM SCREENING',
    img: 'https://www.diagnosticcentres.in/uploads/product_image/1633090712Aarogyam-Screening.jpg',
    price: '200',
    sample: 'Blood',
    details:
      'Thyrocare AAROGYAM SCREENING is a full body checkup package whichConsists of 27 Tests and Consists of fundamental tests for screening of the healthstatus Like Thyroid, Diabetes, CBC profile. This package is ideal for people aged 5years and above.',
  },
  {
    id: '102',
    name: 'HealthyLife Standard',
    img: 'https://www.diagnosticcentres.in/uploads/product_image/1567517264HealthyLife-Standard.jpg',
    price: '1500',
    sample: 'Blood & Urine',
    details:
      'Thyrocare HealthyLife Standard is a full body health checkup package that includes 83 Tests and consists of fundamental tests for screening of the health status Like Lipid, Liver, Thyroid, Iron, Diabetic, Kidney, Complete Hemogram, Urinogram, Electrolytes. This package is ideal for People Aged 18 years and above.',
  },
  {
    id: '103',
    name: 'AAROGYAM SCREENING ADVANCE',
    img: 'https://www.diagnosticcentres.in/uploads/product_image/1633091057Aarogyam-Screening-Advanced.jpg',
    price: '549.00',
    sample: 'Blood',
    details:
      'Thyrocare AAROGYAM SCREENING ADVANCE is a full body checkup package which Consists of 29 Tests and Consists of fundamental tests for screening of the health status Like Thyroid, Diabetes, CBC, Vitamin profile. This package is ideal for people aged 5 years and above.',
  },
  {
    id: '104',
    name: 'Full Body Checkup - Mini',
    img: 'https://www.diagnosticcentres.in/uploads/product_image/Full-Body-Checkup---Mini-.jpg',
    price: '599.00',
    sample: 'Blood',
    details:
      'Full Body Checkup - Mini Package which consists of 28 Tests and includes fundamental tests for screening of the health status Like Diabetic, Complete hemogram, Thyroid. This profile is ideal for People Aged 5 years and above. This profile is ideal for People Aged 18 years and above.',
  },
  {
    id: '105',
    name: 'AAROGYAM BASIC',
    img: 'https://www.diagnosticcentres.in/uploads/product_image/1633089622Aarogyam-Basic.jpg',
    price: '899.00',
    sample: 'Blood & Urine',
    details:
      'Thyrocare AAROGYAM BASIC  is a full body checkup package which Consists of 70 Tests and Consists of fundamental tests for screening of the health status Like Lipid profile, Liver profile, Thyroid profile, Diabetic profile, Kidney profile, Urinogram, Complete Hemogram profile. This package is ideal for people aged 5 years and above.',
  },
  {
    id: '106',
    name: 'Full Body Checkup - Basic',
    img: 'https://www.diagnosticcentres.in/uploads/product_image/15636133671537265180basichealthcheckup.jpg',
    price: '1199.00',
    sample: 'Blood',
    details:
      'Thyrocare Full Body Checkup - Basic is a full body checkup package which Consists of 62 Tests and Consists of fundamental tests for screening of the health status Like Lipid profile, Liver profile, Thyroid profile, Iron profile, Diabetic profile, Renal/Kidney profile, Complete Hemogram profile. This package is ideal for people aged 5 years and above',
  },
  {
    id: '107',
    name: 'HealthyLife Basic',
    img: 'https://www.diagnosticcentres.in/uploads/product_image/1567517247HealthyLife-Basic.jpg',
    price: '1499.00',
    sample: ' Blood & Urine',
    details:
      'Thyrocare HealthyLife Basic is a full body health checkup package that includes 57 Tests and consists of fundamental tests for screening of the health status Like Lipid, Liver, Thyroid, Iron, Diabetic, Kidney, Urinogram, Electrolytes. This package is ideal for People Aged 18 years and above.',
  },
  {
    id: '108',
    name: 'Full Body Checkup - Standard',
    img: 'https://www.diagnosticcentres.in/uploads/product_image/Full-Body-Checkup---Standard.jpg',
    price: '1600.00',
    sample: 'Blood',
    details:
      'Thyrocare Full Body Checkup - Standard is a full body health checkup package that includes 65 Tests and consists of fundamental tests for screening of the health status Like Lipid, Liver, Thyroid, Iron, Diabetic, Kidney, Complete Hemogram, Vitamin D & B12. Thyrocare Full Body Checkup is the one of the pupular range of health checkup packages in India. Full Body Checkup - Standard is one of the best Thyrocare Packages. This package is ideal for People Aged 5 years and above.',
  },
  {
    id: '109',
    name: 'HealthyLife Advanced',
    img: 'https://www.diagnosticcentres.in/uploads/product_image/1567517279HealthyLife-Advanced.jpg',
    price: '1899.00',
    sample: ' Blood & Urine',
    details:
      'Thyrocare HealthyLife Advanced is a full body health checkup package that includes 86 Tests and consists of fundamental tests for screening of the health status Like Lipid, Liver, Thyroid, Iron, Diabetic, Kidney, Complete Hemogram, Hormone, Urinogram, Electrolytes, Vitamin D & B12. This package is ideal for People Aged 18 years and above.',
  },
  {
    id: '110',
    name: 'Woman Wellness Package',
    img: 'https://www.diagnosticcentres.in/uploads/product_image/1563891810womanwellness1.jpg',
    price: '2700.00',
    sample: 'Blood',
    details:
      'Woman Wellness Package consists of 69 Tests including fundamental tests for screening of the health status Like Lipid, Liver, Thyroid, Iron, Diabetic, Kidney, Prolactin, LH, FSH, Estradiol / Estrogen, Complete Hemogram, Vitamin.This package is ideal for Women Aged 25 years and above.',
  },
  {
    id: '111',
    name: 'Full Body Checkup - Advanced',
    img: 'https://www.diagnosticcentres.in/uploads/product_image/Full-Body-Checkup---Advance.jpg',
    price: '3000.00',
    sample: 'Blood',
    details:
      'Full Body Checkup - Advanced Package Consists of 98 Tests and Consists of fundamental tests for screening of the health status Like Cardiac Risk Markers, Complete Hemogram,Diabetics, Iron, Lipid, Liver, Kidney, Thyroid, Vitamin. This package is ideal for People Aged 5 years and above.',
  },
  {
    id: '112',
    name: 'Full Body Checkup - Premium',
    img: 'https://www.diagnosticcentres.in/uploads/product_image/Full-Body-Checkup---Premium.jpg',
    price: '4000.00',
    sample: 'Blood',
    details:
      'Full Body Checkup - Premium Package which Consists of 103 Tests and Consists of fundamental tests for screening of the health status Like Arthritis, Cardiac Risk Markers, Complete Hemogram, Diabetics, Iron, Lipid, Liver, Kidney, Thyroid, Vitamin, Pancreatic, Electrolytes, Hormone, Toxic Elements. This package is ideal for People Aged 5 years and above.',
  },
];

export default healthData;

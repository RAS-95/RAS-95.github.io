interface IAuthor {
  name?: string;
  affiliation?: string;
  self?: boolean;
}

interface IPlace {
  name?: string;
  year?: number;
  prize?: string;
  status?: string;
  nb?: string;
}

interface ITag {
  name?: string;
  link?: string;
}

interface ISupervisor {
  name?: string;
  link?: string;
}

interface ISupervisorList {
  // *: ISupervisor;
  [key: string]: {
    name?: string;
    link?: string;
  };
}

interface IPaper {
  title?: string;
  description?: string;
  image?: string;
  authors?: IAuthor[];
  place?: IPlace;
  tags?: ITag[];
  super_visors?: ISupervisor[];
}

interface IProject {
  title?: string;
  course?: string;
  description?: string;
  image?: string;
  authors?: IAuthor[];
  video?: string;
  code?: string;
  tools?: string[];
  super_visors?: ISupervisor[];
}

const AUTHORS: ISupervisorList = {
  ALI_SIR: {
    name: "Prof. Dr. Md. Ali Hossain",
    link: ""
  },
  SRIZON_SIR: {
    name: "Azmain Yakin Srizon",
    link: ""
  },
  MAHEDY_SIR: {
    name: "S. M. Mahedy Hasan",
    link: ""
  },
  MAMUN_SIR: {
    name: "Prof. Dr. Md Al Mamun",
    link: ""
  },
  SHAHID_SIR: {
    name: "Md. Shahid Uz Zaman",
    link: ""
  },
  FARUK_SIR: {
    name: "Md. Farukuzzaman Faruk",
    link: ""
  },
  RAKIB_SIR: {
    name: "Md. Rakib Hossain",
    link: ""
  },
  SONGRAM_VAI: {
    name: "Rafi Ahammed Songram",
    link: ""
  },
  ASHIK_VAI: {
    name: "Md. Ashik Elahi",
    link: ""
  },
  FAISAL_VAI: {
    name: "Md Faisal karim",
    link: ""
  },
  ABDULLAH_VAI: {
    name: "Abdullah All Siam",
    link: ""
  },
  SUJON_VAI: {
    name: "Sujon Ali",
    link: ""
  },
  OMAR_VAI: {
    name: "Omar Faruk",
    link: ""
  },
  NAZMUL_VAI: {
    name: "Nazmul Haque",
    link: ""
  },
  ABU_SAYEED_SIR: {
    name: "Abu Sayeed",
    link: ""
  }
};

const ONGOING_PAPER: IPaper[] = [
  {
    title:
      "Nuclei Classification in ER-IHC Stained Histopathology Images using Deep Learning Models",
    description:
      "Breast cancer treatment decisions hinge on the carcinoma stage, which is determined through pathological slides and estrogen receptor status. Traditionally, pathologists manually calculate the Allred score to assess tumor nuclei percentage and intensity. This study proposes an automated approach via digital pathology, leveraging deep learning to classify nuclei. We will  evaluate 32 pretrained models, including DenseNet, EfficientNet, InceptionResNet, ResNet, and MobileNetas well as Custom convolutional neural network to identify the most effective model for categorizing nuclei into negative, weak, moderate, and strong classifications from 44 estrogen receptor immunohistochemistry-stained whole slide images.",
    image: "",
    authors: [
      {
        name: AUTHORS.SONGRAM_VAI.name,
        affiliation: AUTHORS.SONGRAM_VAI.link,
        self: true
      },
      {
        name: AUTHORS.OMAR_VAI.name,
        affiliation: AUTHORS.OMAR_VAI.link,
        self: false
      },
    ],
    place: {
      name: "",
      year: 2021,
      prize: "",
      status: "",
      nb: "",
    },
    tags: [
      {
        name: "code",
        link: "",
      },
      {
        name: "abstract",
        link: ""
      }
    ],
    super_visors: [
      {
        name: AUTHORS.MAHEDY_SIR.name,
        link: AUTHORS.MAHEDY_SIR.link,
      },
      {
        name: AUTHORS.MAMUN_SIR.name,
        link: AUTHORS.MAMUN_SIR.link,
      },
    ]
  },
];

const COMPLETED_PAPER: IPaper[] = [
  {
    title: "RAS-BengaliNet: A Novel Lightweight Custom Convolutional Neural Network for Enhanced Recognition of Handwritten Bangla Compound Characters",
    description: "Bengali, the fifth most widely spoken native language, presents unique challenges in character recognition due to its complex script. This study introduces an efficient lightweight CNN architecture for recognizing handwritten Bengali compound characters, outperforming different pretrained models in terms of computational efficiency. Additionally, Grad-CAM was utilized to identify crucial regions influencing the model's decisions, enhancing interpretability.",
    image: "",
    authors: [
      {
        name: AUTHORS.SONGRAM_VAI.name,
        affiliation: AUTHORS.SONGRAM_VAI.link,
        self: true
      },
      {
        name: AUTHORS.MAHEDY_SIR.name,
        affiliation: AUTHORS.MAHEDY_SIR.link,
        self: false
      },
      {
        name: AUTHORS.SRIZON_SIR.name,
        affiliation: AUTHORS.SRIZON_SIR.link,
        self: false
      },
      {
        name: AUTHORS.FARUK_SIR.name,
        affiliation: AUTHORS.FARUK_SIR.link,
        self: false
      },
      {
        name: AUTHORS.RAKIB_SIR.name,
        affiliation: AUTHORS.RAKIB_SIR.link,
        self: false
      },
      {
        name: AUTHORS.MAMUN_SIR.name,
        affiliation: AUTHORS.MAMUN_SIR.link,
        self: false
      },
    ],
    place: {
      name: "(ICCA 2024 - International Conference on Computing Advancements)",
      year: 0,
      prize: "",
      nb: "Will be published in the ACM Digital Library very soon",
      status: "Accepted",
    },
    tags: [
      {
        name: "code",
        link: "",
      },
      {
        name: "abstract",
        link: ""
      }
    ],
    super_visors: [
      {
        name: AUTHORS.MAHEDY_SIR.name,
        link: AUTHORS.MAHEDY_SIR.link,
      },
      {
        name: AUTHORS.MAMUN_SIR.name,
        link: AUTHORS.MAMUN_SIR.link,
      },
    ]
  },
  {
    title: "Network-Shield: Exploring the Efficacy of GRU Model in Intrusion Detection Using CIC-IDS 2018 Dataset",
    description: "This study highlights the effectiveness of a Gated Recurrent Unit (GRU) model in detecting rare but significant security threats. To address data imbalance, Synthetic Minority Over-sampling Technique (SMOTE) was applied, boosting model precision. Additionally, Random Forest was employed for feature selection, enhancing detection efficiency, leading to exceptional results in network intrusion detection.",
    image: "",
    authors: [
      // Md. Ashik Elahi , Rafi Ahammed Songram, Md. Shahid Uz Zaman
      {
        name: AUTHORS.ASHIK_VAI.name,
        affiliation: AUTHORS.ASHIK_VAI.link,
        self: false
      },
      {
        name: AUTHORS.SONGRAM_VAI.name,
        affiliation: AUTHORS.SONGRAM_VAI.link,
        self: true
      },
      {
        name: AUTHORS.SHAHID_SIR.name,
        affiliation: AUTHORS.SHAHID_SIR.link,
        self: false
      },
    ],
    place: {
      name: "(ICCA 2024 - International Conference on Computing Advancements)",
      year: 0,
      prize: "",
      status: "Accepted",
      nb: "Will be published in the ACM Digital Library very soon",
    },
    tags: [
      {
        name: "code",
        link: "",
      },
      {
        name: "abstract",
        link: ""
      }
    ],
    super_visors: [
      {
        name: AUTHORS.SHAHID_SIR.name,
        link: AUTHORS.SHAHID_SIR.link,
      }
    ]
  },
  {
    title: "Enhanced Osteoarthritis Classification through Transfer Learning and Hyperparameter-Tuned Multi-Layer Ensemble Models",
    description: "This paper presents a novel approach for OA classification by leveraging a transfer learning fusion network and fine-tuned hyperparameters. Starting with dataset balancing through data augmentation, it integrates a pre-trained model with a customized CNN featuring four convolutional blocks. The Multi-Layer Ensemble technique merges different model outputs, achieving superior overall performance.",
    image: "",
    authors: [
      {
        name: AUTHORS.NAZMUL_VAI.name,
        affiliation: AUTHORS.NAZMUL_VAI.link,
        self: true
      },
      {
        name: AUTHORS.SONGRAM_VAI.name,
        affiliation: AUTHORS.SONGRAM_VAI.link,
        self: false
      },
      {
        name: AUTHORS.ABDULLAH_VAI.name,
        affiliation: AUTHORS.ABDULLAH_VAI.link,
        self: false
      },
      {
        name: AUTHORS.SUJON_VAI.name,
        affiliation: AUTHORS.SUJON_VAI.link,
        self: false
      },

    ],
    place: {
      name: "(ICCA 2024 - International Conference on Computing Advancements)",
      year: 0,
      prize: "",
      status: "Accepted",
      nb: "Will be published in the ACM Digital Library very soon",
    },
    tags: [
      {
        name: "code",
        link: "",
      },
      {
        name: "abstract",
        link: ""
      }
    ],
    super_visors: [
      {
        name: AUTHORS.SRIZON_SIR.name,
        link: AUTHORS.SRIZON_SIR.link,
      }
    ]
  }
];

const UNDER_REVIEW_PAPER: IPaper[] = [
  {
    title: "Optimizing Brain Tumor Diagnosis: Hybrid Techniques Integrating Deep and Machine Learning on MRI Images",
    description: "Misdiagnosis of tumors often leads to ineffective treatments, reducing patient survival rates. This study explores a unique hybrid approach, merging deep learning with traditional machine learning for accurate brain tumor detection and classification. Alongside, a custom CCNN+ML hybrid method was implemented, further refining results. MRI images were enhanced using Contrast Limited Adaptive Histogram Equalization (CLAHE) to optimize feature quality, boosting diagnostic precision.",
    image: "",
    authors: [
      {
        name: AUTHORS.SONGRAM_VAI.name,
        affiliation: AUTHORS.SONGRAM_VAI.link,
        self: true
      },
      {
        name: AUTHORS.FAISAL_VAI.name,
        affiliation: AUTHORS.FAISAL_VAI.link,
        self: false
      },
    ],
    place: {
      name: "(27th International Conference on Computer and Information Technology (ICCIT))",
      nb: "",
      year: 0,
      prize: "",
      status: "",
    },
    tags: [
      {
        name: "code",
        link: "",
      },
      {
        name: "abstract",
        link: ""
      }
    ],
    super_visors: [
      {
        name: AUTHORS.ALI_SIR.name,
        link: AUTHORS.ALI_SIR.link,
      },
    ]
  },
  {
    title: "SF-CXRnet: A Lightweight Dual-Channel Convolutional Neural Network for Enhanced Diagnosis of COVID-19 and Pneumonia from Chest X-Ray Images",
    description: "This study introduces SF-CXRnet, a highly efficient and lightweight CNN optimized with minimal parameters to boost computational performance. The model accurately classifies chest X-rays into three categories—Normal, COVID-19, and Pneumonia—providing a reliable tool for diagnosing lung conditions.",
    image: "",
    authors: [
      {
        name: AUTHORS.SONGRAM_VAI.name,
        affiliation: AUTHORS.SONGRAM_VAI.link,
        self: true
      },
      {
        name: AUTHORS.FAISAL_VAI.name,
        affiliation: AUTHORS.FAISAL_VAI.link,
        self: false
      },
    ],
    place: {
      name: "(27th International Conference on Computer and Information Technology (ICCIT))",
      nb: "",
      year: 0,
      prize: "",
      status: "",
    },
    tags: [
      {
        name: "code",
        link: "",
      },
      {
        name: "abstract",
        link: ""
      }
    ],
    super_visors: [
      {
        name: AUTHORS.ALI_SIR.name,
        link: AUTHORS.ALI_SIR.link,
      },
    ],
  },
  {
    title: "RAS-Compound Character Dataset: A Comprehensive Database for Handwritten Bangla Compound Characters and Recognition Using RAS-BengaliNet with Grad-CAM Visualization",
    description: "This work and dataset  serves as an extensive resource designed for the accurate recognition of handwritten Bangla compound characters. Leveraging *RAS-BengaliNet*, a specialized deep learning model, this research offers an efficient solution for complex script recognition. Grad-CAM visualization enhances interpretability, providing crucial insights into the model’s decision-making process, making it highly beneficial for NLP-based applications and advancing Bangla character recognition technology.",
    image: "",
    authors: [
      {
        name: AUTHORS.SONGRAM_VAI.name,
        affiliation: AUTHORS.SONGRAM_VAI.link,
        self: true
      },
    ],
    place: {
      name: "(27th International Conference on Computer and Information Technology (ICCIT))",
      nb: "",
      year: 0,
      prize: "",
      status: "",
    },
    tags: [
      {
        name: "code",
        link: "",
      },
      {
        name: "abstract",
        link: ""
      }
    ],
    super_visors: [
      {
        name: AUTHORS.MAHEDY_SIR.name,
        link: AUTHORS.MAHEDY_SIR.link,
      },
      {
        name: AUTHORS.SRIZON_SIR.name,
        link: AUTHORS.SRIZON_SIR.link,
      },
    ]
  }
]

const PROJECTS: IProject[] = [
  {
    title: "6-bit CPU Design",
    authors: [
      {
        name: AUTHORS.SONGRAM_VAI.name,
        affiliation: AUTHORS.SONGRAM_VAI.link,
        self: true
      },
    ],
    course: "Computer architecture Project, 2023",
    description: "This project showcases a fully functional CPU circuit built using Verilog HDL and digital simulation tools. The design includes an ALU capable of performing essential operations such as AND, ADD, and SHR. Additionally, the control unit, RAM, and registers were developed in alignment with a specified Instruction Set Architecture (ISA), ensuring seamless execution of computational tasks.",
    code: "",
    image: "",
    video: "",
    tools: ["Verilog HDL", "Digital Simulation Tools"],
    super_visors: []
  },
  {
    title: "Sign language Detection",
    authors: [
      {
        name: AUTHORS.SONGRAM_VAI.name,
        affiliation: AUTHORS.SONGRAM_VAI.link,
        self: true
      },
    ],
    course: "Machine Learning Based Project, 2023",
    description: "This project involved curating a dataset of over 5,000 images of various hand gestures, aimed at creating a solution for enhancing communication for specially-abled individuals. I developed a custom convolutional neural network architecture that accurately recognizes these gestures, enabling intuitive interaction for those with communication challenges. Completing this project not only provided a meaningful tool for accessibility but also sparked my deeper exploration into the world of deep learning, refining my skills and expanding my understanding of complex neural networks.",
    code: "",
    image: "",
    video: "",
    tools: ["Deep learning(CNN)", "Scikit-learn", "Keras", "Tensorflow"],
    super_visors: []
  },
  {
    title: "RUET Course Registration System",
    authors: [
      {
        name: AUTHORS.SONGRAM_VAI.name,
        affiliation: AUTHORS.SONGRAM_VAI.link,
        self: true
      },
    ],
    course: "Web Based Project, 2021",
    description: "This system is designed to streamline the course enrollment process, significantly reducing the complexities associated with managing registrations. This innovative system simplifies the management of student information, allowing for efficient tracking and updates of student records. Additionally, it facilitates seamless payment processing, ensuring that financial transactions are handled swiftly and securely. By centralizing these functions, the system not only enhances operational efficiency but also improves the overall experience for both students and administrative staff.",
    code: "https://www.linkedin.com/posts/rafi-songram_this-project-will-reduce-hassle-to-manage-activity-6807055004118212608-cGDW?utm_source=share&utm_medium=member_desktop",
    image: "",
    video: "",
    tools: [
      "Java", "MySQL"
    ],
    super_visors: []
  },
  {
    title: "RUET News Portal [RUET PEDIA]",
    authors: [
      {
        name: AUTHORS.SONGRAM_VAI.name,
        affiliation: AUTHORS.SONGRAM_VAI.link,
        self: true
      },
    ],
    course: "Web Based Project, 2021",
    description: "RUET PEDIA is an interactive news portal for Rajshahi University of Engineering and Technology, designed to enhance user engagement and content sharing. It features a commenting system for user interaction, a header navbar for easy navigation, a slider for highlighting key news, and sections for recent content and university achievements. The backend includes secure user authentication, email verification, and an admin panel that allows for efficient content management, including editing and deleting posts. This streamlined structure fosters a vibrant community among students, faculty, and alumni while keeping them informed of the latest updates.",
    code: "https://github.com/RAS-95/project_newspaper",
    image: "",
    video: "",
    tools: [
      "HTML", "CSS", "JavaScript", "PHP", "MySQL"
    ],
    super_visors: [
      {
        name: AUTHORS.ABU_SAYEED_SIR.name,
        link: ""
      }
    ]
  },
  {
    title: "Blood Donation Management System",
    authors: [
      {
        name: AUTHORS.SONGRAM_VAI.name,
        affiliation: AUTHORS.SONGRAM_VAI.link,
        self: true
      },
    ],
    course: "Web Based Project, 2020",
    description: "The Blood Donating Site is a user-friendly platform designed to enhance the efficiency of blood donation efforts. It features a robust User Account Management  system that allows both donors and recipients to easily register and manage their profiles. Users can conduct a  Donor Search , enabling them to find potential donors by city or blood group, thus facilitating quick connections with interested donors. Additionally, the site enforces Donation Restrictions , implementing a 3-month waiting period after each donation to ensure compliance with health guidelines. This thoughtful structure promotes a safe and effective blood donation culture within the community.",
    code: "https://www.linkedin.com/posts/rafi-songram_backendwebdevelopment-php-phpproject-activity-6709095156810944512-WNu3?utm_source=share&utm_medium=member_desktop",
    image: "",
    video: "",
    tools: [
      "HTML", "CSS", "JavaScript", "PHP", "MySQL"
    ],
    super_visors: []
  }
]
interface IAuthor {
  name?: string;
  affiliation?: string;
  self?: boolean;
}

interface IPlace {
  name?: string;
  year?: string;
  prize?: string;
  status?: string;
  nb?: string;
  special?: string;
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
    link: "https://www.cse.ruet.ac.bd/aliruet"
  },
  RIZOAN_SIR: {
    name: "Rizoan Toufiq",
    link: "https://www.cse.ruet.ac.bd/rizoantoufiq"
  },
  SRIZON_SIR: {
    name: "Azmain Yakin Srizon",
    link: "https://www.cse.ruet.ac.bd/azmainsrizon"
  },
  MAHEDY_SIR: {
    name: "S. M. Mahedy Hasan",
    link: "https://www.cse.ruet.ac.bd/mahedycseruet"
  },
  MAMUN_SIR: {
    name: "Prof. Dr. Md Al Mamun",
    link: "https://www.cse.ruet.ac.bd/dr.almamun"
  },
  SHAHID_SIR: {
    name: "Md. Shahid Uz Zaman",
    link: "https://www.cse.ruet.ac.bd/szaman22ruet"
  },
  FARUK_SIR: {
    name: "Md. Farukuzzaman Faruk",
    link: "https://www.cse.ruet.ac.bd/farukuzzaman"
  },
  RAKIB_SIR: {
    name: "Md. Rakib Hossain",
    link: ""
  },
  ABU_SAYEED_SIR: {
    name: "Abu Sayeed",
    link: "https://www.cse.ruet.ac.bd/abusayeedcse"
  },
  SONGRAM_VAI: {
    name: "Rafi Ahammed Songram",
    link: "https://github.com/RAS-95"
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
  REYAL_VAI: {
    name: "Mahmood Reyal",
    link: ""
  },
  TUSHAR_VAI: {
    name: "Tushar Das",
    link: ""
  }
};

const ONGOING_PAPER: IPaper[] = [
  {
    title:
      "Nuclei Classification in ER-IHC Stained Histopathology Images using Deep Learning Models",
    description:
      "Breast cancer treatment decisions hinge on the carcinoma stage, which is determined through pathological slides and estrogen receptor status. Traditionally, pathologists manually calculate the Allred score to assess tumor nuclei percentage and intensity. This study proposes an automated approach via digital pathology, leveraging deep learning to classify nuclei. We will  evaluate 32 pretrained models, including DenseNet, EfficientNet, InceptionResNet, ResNet, and MobileNetas well as Custom convolutional neural network to identify the most effective model for categorizing nuclei into negative, weak, moderate, and strong classifications from 44 estrogen receptor immunohistochemistry-stained whole slide images.",
    image: "./images/Research/Ongoing/ongoing.png",
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
      year: "2024",
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
      },
      {
        name: "slide",
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
    image: "./images/Research/RAS-BengaliNet/1.png",
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
      year: "",
      prize: "",
      nb: "Will be published in the ACM Digital Library very soon",
      status: "Accepted",
      special: "Undergraduate Thesis [2023]",
    },
    tags: [
      {
        name: "code",
        link: "",
      },
      {
        name: "abstract",
        link: ""
      },
      {
        name: "slide",
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
    image: "./images/Research/Network-shield/attack-dist.png",
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
      year: "2023-2024",
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
      },
      {
        name: "slide",
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
    image: "./images/Research/Osteoarthritis Classification/Sequential Workflow_2-1.png",
    authors: [
      {
        name: AUTHORS.NAZMUL_VAI.name,
        affiliation: AUTHORS.NAZMUL_VAI.link,
        self: false
      },
      {
        name: AUTHORS.SONGRAM_VAI.name,
        affiliation: AUTHORS.SONGRAM_VAI.link,
        self: true
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
      year: "2024",
      prize: "",
      status: "Accepted",
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
      },
      {
        name: "slide",
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
    image: "./images/Research/Brain Tumor/BT-Methodology.drawio.png",
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
      year: "2023-2024",
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
      },
      {
        name: "slide",
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
    image: "./images/Research/SF-CXRnet-Lung/curve.jpg",
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
      year: "2023-2024",
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
      },
      {
        name: "slide",
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
    image: "./images/Research/Journal/Workflow.drawio.jpg",
    authors: [
      {
        name: AUTHORS.SONGRAM_VAI.name,
        affiliation: AUTHORS.SONGRAM_VAI.link,
        self: true
      },
    ],
    place: {
      name: "Journal: Pattern Recognition-Q1(Expected)",
      nb: "",
      year: "",
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
      },
      {
        name: "slide",
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
    code: "https://github.com/RAS-95/Computer_Architecture_6_bit_CPU_design",
    image: "./images/Projects/6-bit-CPU/6bit_cpu.png",
    video: "https://github.com/RAS-95/6_bit_CPU_verilog",
    tools: ["Verilog HDL", "Digital Simulation Tools"],
    super_visors: []
  },
  {
    title: "Sign Language Detection",
    authors: [
      {
        name: AUTHORS.SONGRAM_VAI.name,
        affiliation: AUTHORS.SONGRAM_VAI.link,
        self: true
      },
    ],
    course: "Machine Learning Based Project, 2023",
    description: "This project involved curating a dataset of over 5,000 images of various hand gestures, aimed at creating a solution for enhancing communication for specially-abled individuals. I developed a custom convolutional neural network architecture that accurately recognizes these gestures, enabling intuitive interaction for those with communication challenges. Completing this project not only provided a meaningful tool for accessibility but also sparked my deeper exploration into the world of deep learning, refining my skills and expanding my understanding of complex neural networks.",
    code: "https://github.com/RAS-95/asl",
    image: "./images/Projects/Sign Language Detection/asl.gif",
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
    code: "https://github.com/RAS-95/course-registration-system",
    video: "https://www.linkedin.com/posts/rafi-songram_this-project-will-reduce-hassle-to-manage-activity-6807055004118212608-cGDW",
    image: "./images/Projects/course registration system/crs.gif",
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
      {
        name: AUTHORS.REYAL_VAI.name,
        affiliation: AUTHORS.REYAL_VAI.link,
        self: false
      },
      {
        name: AUTHORS.TUSHAR_VAI.name,
        affiliation: AUTHORS.TUSHAR_VAI.link,
        self: false
      },
    ],
    course: "Web Based Project, 2021",
    description: "RUET PEDIA is an interactive news portal for Rajshahi University of Engineering and Technology, designed to enhance user engagement and content sharing. It features a commenting system for user interaction, a header navbar for easy navigation, a slider for highlighting key news, and sections for recent content and university achievements. The backend includes secure user authentication, email verification, and an admin panel that allows for efficient content management, including editing and deleting posts. This streamlined structure fosters a vibrant community among students, faculty, and alumni while keeping them informed of the latest updates.",
    code: "https://github.com/RAS-95/project_newspaper",
    image: "./images/Projects/RUET-Pedia/newsportal..gif",
    video: "",
    tools: [
      "HTML", "CSS", "JavaScript", "PHP", "MySQL"
    ],
    super_visors: [
      {
        name: AUTHORS.ABU_SAYEED_SIR.name,
        link: AUTHORS.ABU_SAYEED_SIR.link
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
    code: "https://github.com/RAS-95/donate-the-blood",
    video: "https://www.linkedin.com/posts/rafi-songram_backendwebdevelopment-php-phpproject-activity-6709095156810944512-WNu3",
    image: "./images/Projects/Donate blood/1.png",
    tools: [
      "HTML", "CSS", "JavaScript", "PHP", "MySQL"
    ],
    super_visors: []
  }
]

const ASSIGNMENT_PROJECTS: IProject[] = [
  {
    title: "Predicting Diabetes: Multi-Layer Neural Network Approach for Early Detection",
    authors: [
      {
        name: AUTHORS.SONGRAM_VAI.name,
        affiliation: AUTHORS.SONGRAM_VAI.link,
        self: true
      },
    ],
    course: "Neural Network Assignment Project, 2022",
    description: "This project focuses on designing and implementing a Diabetes Prediction system using a Multi-Layer Neural Network (MLNN) algorithm. It begins with data collection from medical records and health databases, emphasizing features like age, BMI, glucose levels, and family history. The data is preprocessed to address missing values and normalize inputs for optimal performance. The MLNN architecture consists of input, hidden, and output layers to capture complex data patterns. The network is trained on a labeled dataset using backpropagation to minimize prediction errors. Finally, the model's accuracy is assessed with a separate test dataset. This system aims to equip healthcare professionals with a robust tool for early diabetes detection, enhancing patient outcomes through timely intervention.",
    code: "https://github.com/RAS-95/Neural_Network/tree/main/Lab_03",
    image: "./images/Projects/MLP-diabetes/Diabetes.gif",
    video: "",
    tools: [
      "Python ( Panda, Scikit-learn, Seaborn)"
    ],
    super_visors: [
      {
        name: AUTHORS.RIZOAN_SIR.name,
        link: AUTHORS.RIZOAN_SIR.link,
      }
    ]
  },
  {
    title: "K-Nearest Neighbors Approach: Empowering Predictive Analytics for Heart Disease Detection",
    authors: [
      {
        name: AUTHORS.SONGRAM_VAI.name,
        affiliation: AUTHORS.SONGRAM_VAI.link,
        self: true
      },
    ],
    course: "Neural Network Assignment Project, 2022",
    description: "This project aims to predict heart disease using the K-Nearest Neighbors (KNN) algorithm, analyzing a dataset with 14 key features including age , sex, chest pain type, resting blood pressure, cholesterol levels, fasting blood sugar, resting ECG results, maximum heart rate, exercise-induced angina, ST depression, slope of the ST segment, number of major vessels, thalassemia, and the target variable indicating heart disease presence. The preprocessing stage involves handling missing values and normalizing the data for consistent feature scales. Various KNN configurations are tested by varying the number of neighbors to optimize accuracy. Comparative analysis of model performance assesses accuracy metrics for different K values. Through careful analysis and fine-tuning, this project aims to provide healthcare professionals with a reliable tool for early heart disease detection, ultimately improving patient care and outcomes.",
    code: "https://github.com/RAS-95/Heart-Disease-prediction-Using-ML",
    image: "./images/Projects/KNN-Heart-Disease/heart-disease.gif",
    video: "",
    tools: [
      "Python ( Panda, Scikit-learn, Seaborn)"
    ],
    super_visors: []
  }
];

const FUN_PROJECTS: IProject[] = [
  {
    title: "ToDo App",
    authors: [
      {
        name: AUTHORS.SONGRAM_VAI.name,
        affiliation: AUTHORS.SONGRAM_VAI.link,
        self: true
      },
    ],
    course: "Fun Project, 2019",
    description: "This is a fun project I embarked on when I started learning PHP for the first time: a ToDo App. The application empowers users to efficiently manage their tasks through features that allow adding, editing, and deleting items, all while ensuring secure access with user authentication. With robust database integration, the app provides persistent storage, enabling users to retain their task lists across sessions. Developing this application has significantly enhanced my PHP proficiency and fueled my passion for crafting innovative web solutions.",
    code: "https://github.com/RAS-95/todo",
    image: "./images/Projects/Fun projects/TODO/todo.gif",
    video: "https://www.linkedin.com/posts/rafi-songram_backendwebdevelopment-php-phpprojects-activity-6711009629989687296--MQu",
    tools: [
      "CSS", "PHP"
    ],
    super_visors: []
  },
  {
    title: "Chess Game using C++",
    authors: [
      {
        name: AUTHORS.SONGRAM_VAI.name,
        affiliation: AUTHORS.SONGRAM_VAI.link,
        self: true
      },
    ],
    course: "Fun Project, 2019",
    description: "During my exploration of C++, I undertook an engaging project: a Chess Game. This application features a fully functional chessboard interface, complete with visually distinct pieces. It supports alternating player turns and includes move validation, as well as a mode where one side plays against a basic AI while the other is controlled by the user. This project significantly enhanced my programming skills, particularly in object-oriented design and algorithm implementation, while also deepening my appreciation for game development. Developing this chess game was a rewarding experience that allowed me to apply my knowledge in a practical context and engage with a timeless strategy game.",
    code: "https://github.com/RAS-95/Fun-Project--Chess-using-C-2019",
    image: "./images/Projects/Fun projects/Chess/chess.gif",
    video: "",
    tools: [
      "C++"
    ],
    super_visors: []
  }
];

const SOCIAL_LINKS = [
  {
    name: "CV",
    link: "https://drive.google.com/file/d/1M5YM2hEs0f2XVTCKxuBTHJgMlYqBrxkB/view?usp=sharing"
  },
  {
    name: "GitHub",
    link: "https://github.com/RAS-95",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rafi-songram/",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/rafiahammed.songram/",
  }
];

function generatePaperTable(idName: string, PAPER: IPaper[] = []) {
  const tableContainer = document.getElementById(idName);

  if (tableContainer && PAPER?.length > 0) {
    PAPER.forEach((paper) => {
      // Create table row
      const row = document.createElement('tr');

      // Left-side image column
      const imageCell = document.createElement('td');
      imageCell.style.padding = '2.5%';
      imageCell.style.width = '25%';
      imageCell.style.verticalAlign = 'middle';
      imageCell.style.minWidth = '120px';

      const image = document.createElement('img');
      image.src = paper.image ? paper.image : '/path/to/default/image.png';
      image.alt = 'project image';
      image.style.width = 'auto';
      image.style.height = 'auto';
      image.style.maxWidth = '100%';
      image.loading = 'lazy';
      imageCell.appendChild(image);

      // Right-side content column
      const contentCell = document.createElement('td');
      contentCell.style.padding = '2.5%';
      contentCell.style.width = '75%';
      contentCell.style.verticalAlign = 'middle';

      // Title
      const title = document.createElement('h3');
      title.style.color = 'darkblue';
      title.textContent = paper.title ?? '';
      contentCell.appendChild(title);
      contentCell.appendChild(document.createElement('br'));

      // Authors
      paper?.authors?.forEach((author, index) => {
        let authorElement;

        // If the author is marked as self, bold the name
        if (author.self) {
          authorElement = document.createElement('strong');
        } else {
          authorElement = document.createElement('span');
        }


        if (author.affiliation) {
          const authorLink = document.createElement('a');
          authorLink.href = author.affiliation;
          authorLink.target = '_blank';
          authorLink.textContent = author.name ?? '';
          authorLink.style.fontWeight = author.self ? 'bold' : 'normal';
          authorLink.style.color = 'inherit';
          contentCell.appendChild(authorLink);
        } else {
          authorElement.textContent = author.name ?? '';
          contentCell.appendChild(authorElement);
        }

        if (paper.authors && index < paper.authors.length - 1) {
          contentCell.appendChild(document.createTextNode(', '));
        }
      });

      // Year and Status
      const placeInfo = document.createElement('p');
      if (paper?.place?.special) {
        const specialElement = document.createElement('p');
        specialElement.textContent = paper.place.special;
        specialElement.style.fontWeight = 'bold';
        specialElement.style.fontStyle = 'italic';
        specialElement.style.color = 'green';
        placeInfo.appendChild(specialElement);
      }
      if (paper?.place?.name) {
        if (paper?.place?.status) {
          const statusElement = document.createElement('span');
          statusElement.textContent = `${paper.place.status} - `;
          statusElement.style.color = 'green';
          placeInfo.appendChild(statusElement);
        }
        const placeElement = document.createElement('span');
        placeElement.textContent = paper.place.name;
        placeElement.style.color = 'green';
        placeInfo.appendChild(placeElement);
      }
      if (paper?.place?.year) {
        const yearElement = document.createElement('b');
        yearElement.textContent = ` [${paper.place.year}]`;
        placeInfo.appendChild(yearElement);
      }
      if (paper?.place?.prize) {
        const prizeElement = document.createElement('span');
        prizeElement.textContent = ` - ${paper.place.prize}`;
        prizeElement.style.color = 'red';
        placeInfo.appendChild(prizeElement);
      }
      if (paper?.place?.nb) {
        const nbElement = document.createElement('p');
        nbElement.style.color = 'gray';
        nbElement.innerHTML = ` <strong>NB</strong> - <span c>${paper.place.nb}</span>`;

        placeInfo.appendChild(nbElement);
      }
      contentCell.appendChild(placeInfo);

      const tagCell = document.createElement('p')
      if(paper?.tags && paper?.tags?.length > 0){
        tagCell.appendChild(document.createTextNode('[ '))
      }
      // Tags (abstract/code)
      (paper?.tags ?? []).forEach((tag, index) => {
        if (tag.link) {
          const tagLink = document.createElement('a');
          tagLink.href = tag.link;
          tagLink.target = '_blank';
          tagLink.textContent = tag.name ?? '';
          tagCell.appendChild(tagLink);
        } else {
          tagCell.appendChild(document.createTextNode(tag.name ?? ''));
        }
        
        if (paper.tags && index < paper.tags.length - 1) {
          tagCell.appendChild(document.createTextNode(' / '));
        }
      });
      if(paper?.tags && paper?.tags?.length > 0){
        tagCell.appendChild(document.createTextNode(' ]'))
      }
      contentCell.appendChild(tagCell);

      // Description
      const description = document.createElement('p');
      description.textContent = paper.description ?? '';
      contentCell.appendChild(description);

      // Supervisors
      const supervisorHeader = document.createElement('h3');
      supervisorHeader.style.color = 'darkblue';
      supervisorHeader.textContent = 'Supervisor(s): ';
      contentCell.appendChild(supervisorHeader);

      paper?.super_visors?.forEach((supervisor, index) => {
        if (supervisor.link) {
          const supervisorLink = document.createElement('a');
          supervisorLink.href = supervisor.link;
          supervisorLink.target = '_blank';
          supervisorLink.textContent = supervisor.name ?? '';
          contentCell.appendChild(supervisorLink);
        } else {
          contentCell.appendChild(document.createTextNode(supervisor.name ?? ''));
        }

        if (paper?.super_visors && index < paper.super_visors.length - 1) {
          contentCell.appendChild(document.createTextNode(', '));
        }
      });

      // Append cells to row
      row.appendChild(imageCell);
      row.appendChild(contentCell);


      // Append row to table
      if (tableContainer) {
        tableContainer.appendChild(row);
      } else {
        console.error('Table container not found');
      }
    });
  } else {
    console.error('Table container not found');
  }
}

function generateCourseTable(idName: string, PROJECTS_LIST: IProject[] = []) {
  const projectsTable = document.getElementById(idName);
  if (projectsTable) {

    PROJECTS_LIST.forEach((project) => {
      const row = document.createElement('tr');

      // Image column
      const imageCell = document.createElement('td');
      imageCell.style.padding = '2.5%';
      imageCell.style.width = '25%';
      imageCell.style.verticalAlign = 'middle';
      imageCell.style.minWidth = '120px';

      const img = document.createElement('img');
      img.src = project.image || '/path/to/default_image.png'; // Placeholder if no image is provided
      img.alt = "project image";
      img.style.width = 'auto';
      img.style.height = 'auto';
      img.style.maxWidth = '100%';
      img.loading = 'lazy';
      imageCell.appendChild(img);
      row.appendChild(imageCell);

      // Content column
      const contentCell = document.createElement('td');
      contentCell.style.padding = '2.5%';
      contentCell.style.width = '75%';
      contentCell.style.verticalAlign = 'middle';

      // Project Title
      const title = document.createElement('h3');
      title.style.color = 'darkblue';
      title.textContent = project.title ?? '';
      contentCell.appendChild(title);

      // Authors
      const authorsText = document.createElement('p');
      (project.authors ?? []).forEach((author, index) => {
        let authorElement = author.self ? document.createElement('strong') : document.createElement('span');

        if (author.affiliation) {
          const authorLink = document.createElement('a');
          authorLink.href = author.affiliation;
          authorLink.target = '_blank';
          authorLink.textContent = author.name ?? '';
          authorLink.style.textDecoration = 'none';
          authorLink.style.color = 'inherit';
          authorElement.appendChild(authorLink);
        } else {
          authorElement.textContent = author.name ?? '';
        }

        authorsText.appendChild(authorElement);

        if (index < (project.authors ?? []).length - 1) {
          authorsText.appendChild(document.createTextNode(', '));
        }
      });
      contentCell.appendChild(authorsText);

      // Course and year
      if (project.course) {
        const courseInfo = document.createElement('em');
        courseInfo.style.color = 'darkgreen';
        courseInfo.textContent = project.course;
        contentCell.appendChild(courseInfo);
        // insert a space after the course
        contentCell.appendChild(document.createTextNode(' '));
      }
      // Links (code, video, etc.)
      const linksParagraph = document.createElement('span');

      if (project.code || project.video) {
        linksParagraph.appendChild(document.createTextNode(' - [ '));
      }

      if (project.code) {
        const codeLink = document.createElement('a');
        codeLink.href = project.code;
        codeLink.target = '_blank';
        codeLink.textContent = 'code';
        codeLink.style.textDecoration = 'none';
        codeLink.style.color = 'blue';
        linksParagraph.appendChild(codeLink);
      }
      if (project.video) {
        if (project.code) {
          linksParagraph.appendChild(document.createTextNode(' / '));
        }
        const videoLink = document.createElement('a');
        videoLink.href = project.video;
        videoLink.target = '_blank';
        videoLink.textContent = 'video';
        videoLink.style.textDecoration = 'none';
        videoLink.style.color = 'blue';
        linksParagraph.appendChild(videoLink);
      }
      if (project.code || project.video) {
        linksParagraph.appendChild(document.createTextNode(' ]'));
      }
      contentCell.appendChild(linksParagraph);

      // Description
      const description = document.createElement('p');
      description.textContent = project.description ?? '';
      contentCell.appendChild(description);

      // Tools used
      if (project.tools && project.tools.length > 0) {
        const toolsParagraph = document.createElement('p');
        toolsParagraph.innerHTML = `<strong>Tools Used:</strong> ${project.tools.join(', ')}`;
        contentCell.appendChild(toolsParagraph);
      }

      if (project.super_visors && project.super_visors.length > 0) {
        const supervisorHeader = document.createElement('h3');
        supervisorHeader.style.color = 'darkblue';
        supervisorHeader.textContent = 'Supervisor(s): ';
        contentCell.appendChild(supervisorHeader);
        project?.super_visors?.forEach((supervisor, index) => {
          if (supervisor.link) {
            const supervisorLink = document.createElement('a');
            supervisorLink.href = supervisor.link;
            supervisorLink.target = '_blank';
            supervisorLink.textContent = supervisor.name ?? '';
            contentCell.appendChild(supervisorLink);
          } else {
            contentCell.appendChild(document.createTextNode(supervisor.name ?? ''));
          }

          if (project?.super_visors && index < project.super_visors.length - 1) {
            contentCell.appendChild(document.createTextNode(', '));
          }
        });
      }


      row.appendChild(contentCell);

      // Append the row to the table
      if (projectsTable) {
        projectsTable.appendChild(row);
      } else {
        console.error('Projects table not found');
      }
    });

  }

}

function socialMediaTable() {
  const container = document.getElementById('social-links-container');
  if (container) {
    SOCIAL_LINKS.forEach((social, index) => {
      const linkElement = document.createElement('a');
      linkElement.href = social.link;
      linkElement.target = "_blank";
      linkElement.textContent = social.name;

      container.appendChild(linkElement);

      // Add spacing between links except the last one
      if (index < SOCIAL_LINKS.length - 1) {
        container.appendChild(document.createTextNode(' / '));
      }
    });
  } else {
    console.error('Container for social links not found');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  generatePaperTable('ongoing-paper-container', ONGOING_PAPER);
  generatePaperTable('complete-paper-container', COMPLETED_PAPER);
  generatePaperTable('under-review-paper-container', UNDER_REVIEW_PAPER);
  socialMediaTable();
  generateCourseTable('project-container', PROJECTS);
  generateCourseTable('assignment-project-container', ASSIGNMENT_PROJECTS);
  generateCourseTable('fun-project-container', FUN_PROJECTS);
});
var AUTHORS = {
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
var ONGOING_PAPER = [
    {
        title: "Nuclei Classification in ER-IHC Stained Histopathology Images using Deep Learning Models",
        description: "Breast cancer treatment decisions hinge on the carcinoma stage, which is determined through pathological slides and estrogen receptor status. Traditionally, pathologists manually calculate the Allred score to assess tumor nuclei percentage and intensity. This study proposes an automated approach via digital pathology, leveraging deep learning to classify nuclei. We will  evaluate 32 pretrained models, including DenseNet, EfficientNet, InceptionResNet, ResNet, and MobileNetas well as Custom convolutional neural network to identify the most effective model for categorizing nuclei into negative, weak, moderate, and strong classifications from 44 estrogen receptor immunohistochemistry-stained whole slide images.",
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
var COMPLETED_PAPER = [
    {
        title: "RAS-BengaliNet: A Novel Lightweight Custom Convolutional Neural Network for Enhanced Recognition of Handwritten Bangla Compound Characters",
        description: "Bengali, the fifth most widely spoken native language, presents unique challenges in character recognition due to its complex script. This study introduces an efficient lightweight CNN architecture for recognizing handwritten Bengali compound characters, outperforming different pretrained models in terms of computational efficiency. Additionally, Grad-CAM was utilized to identify crucial regions influencing the model's decisions, enhancing interpretability.",
        image: "./images/Research/RAS-BengaliNet/1.png",
        DOI: "https://doi.org/10.1145/3723178.3723298",
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
            nb: "Published in the ACM Digital Library",
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
        DOI: "https://doi.org/10.1145/3723178.3723318",
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
            nb: "Published in the ACM Digital Library",
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
        DOI: "https://doi.org/10.1109/ICISET62123.2024.10941130",
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
    },
    {
        title: "SFTNet: A Hybrid Approach Combining Deep Learning and Machine Learning for Brain Tumor Classification",
        description: "Misdiagnosis of tumors often leads to ineffective treatments, reducing patient survival rates. This study explores a unique hybrid approach, merging deep learning with traditional machine learning for accurate brain tumor detection and classification. Alongside, a custom CCNN+ML hybrid method was implemented, further refining results. MRI images were enhanced using Contrast Limited Adaptive Histogram Equalization (CLAHE) to optimize feature quality, boosting diagnostic precision.",
        image: "./images/Research/Brain Tumor/BT-Methodology.drawio.png",
        DOI: "https://doi.org/10.1109/ICCIT64611.2024.11022418",
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
        title: "SF-CXRnet: A Lightweight Dual-Channel CNN for Enhanced Detection of COVID-19 and Pneumonia from Chest X-Ray Images",
        description: "This study introduces SF-CXRnet, a highly efficient and lightweight CNN optimized with minimal parameters to boost computational performance. The model accurately classifies chest X-rays into three categories—Normal, COVID-19, and Pneumonia—providing a reliable tool for diagnosing lung conditions.",
        image: "./images/Research/SF-CXRnet-Lung/curve.jpg",
        DOI: "https://doi.org/10.1109/ICCIT64611.2024.11022038",
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
        description: "This work and dataset  serves as an extensive resource designed for the accurate recognition of handwritten Bangla compound characters. Leveraging RAS-BengaliNet, a specialized deep learning model, this research offers an efficient solution for complex script recognition. Grad-CAM visualization enhances interpretability, providing crucial insights into the model’s decision-making process, making it highly beneficial for NLP-based applications and advancing Bangla character recognition technology.",
        image: "./images/Research/Journal/Workflow.drawio.jpg",
        authors: [
            {
                name: AUTHORS.SONGRAM_VAI.name,
                affiliation: AUTHORS.SONGRAM_VAI.link,
                self: true
            },
        ],
        place: {
            name: "Journal: Information Fusion -Q1(Expected)",
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
            {
                name: AUTHORS.ALI_SIR.name,
                link: AUTHORS.ALI_SIR.link,
            },
        ]
    }
];
var PROJECTS = [
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
        course: "Machine Learning Based Project, 2022",
        description: "This project involved curating a dataset of over 5,000 images of various hand gestures, aimed at creating a solution for enhancing communication for specially-abled individuals. I developed a custom convolutional neural network architecture that accurately recognizes these gestures, enabling intuitive interaction for those with communication challenges. Completing this project not only provided a meaningful tool for accessibility but also sparked my deeper exploration into the world of deep learning, refining my skills and expanding my understanding of complex neural networks.",
        code: "https://github.com/RAS-95/asl",
        image: "./images/Projects/Sign Language Detection/asl.gif",
        video: "",
        tools: ["Deep learning(CNN)", "Scikit-learn", "Keras", "Tensorflow"],
        super_visors: []
    },
    {
        title: "Real-Time Intelligence: Advancing Object Detection with YOLOv8m for Edge-Driven Applications",
        authors: [
            {
                name: AUTHORS.SONGRAM_VAI.name,
                affiliation: AUTHORS.SONGRAM_VAI.link,
                self: true
            },
        ],
        course: "Computer Vision Project, 2022",
        description: "Crafted an advanced YOLOv8m model that brings real-time object detection to life, powering applications from autonomous vehicles to next-gen surveillance systems. With smart data augmentations and finely tuned anchor boxes, the model delivers razor-sharp accuracy, achieving an impressive mAP of [insert value]. Engineered for speed and lightweight efficiency, it’s ready to run seamlessly on edge devices like drones and mobile platforms. This project pushes the boundaries of AI, blending cutting-edge tech with real-world impact, perfect for high-stakes environments where every second counts.",
        code: "https://github.com/RAS-95/real-Time-Object-Detection",
        image: "./images/Projects/Object-Detection/object-detection.gif",
        video: "",
        tools: ["Python", "YOLOv8", "Pytorch", "OpenCv", "Pillow (PIL)", "Scikit-learn", "Keras", "Tensorflow"],
        super_visors: [
            {
                name: AUTHORS.ABU_SAYEED_SIR.name,
                link: AUTHORS.ABU_SAYEED_SIR.link
            }
        ]
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
];
var ASSIGNMENT_PROJECTS = [
    {
        title: "Human-Computer Interaction Through Emotion Recognition: Development of a Custom CNN Architecture for Facial Expression Classification",
        authors: [
            {
                name: AUTHORS.SONGRAM_VAI.name,
                affiliation: AUTHORS.SONGRAM_VAI.link,
                self: true
            },
        ],
        course: "Neural Network Project, 2023",
        description: "This project focuses on automatic human emotion recognition, a field that has gained significant attention with the rise of IoT and the development of smart environments in hospitals, homes, and cities. Intelligent Personal Assistants (IPAs) like Siri, Alexa, and Cortana utilize natural language processing to interact with humans, but integrating emotion recognition can enhance communication and bring systems closer to human-level intelligence. In this project, we are classifying facial expressions using the VGG-16 architecture, while also working on developing a custom CNN architecture for improved accuracy. The work is ongoing, with promising results from initial samples.",
        code: "https://github.com/RAS-95/Facial-Recognition",
        image: "./images/Projects/Facial-Expression/facial.gif",
        video: "",
        tools: [
            "Python ( Panda, Scikit-learn, Keras, Tensorflow)"
        ],
        super_visors: [
            {
                name: AUTHORS.RIZOAN_SIR.name,
                link: AUTHORS.RIZOAN_SIR.link,
            }
        ]
    },
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
var FUN_PROJECTS = [
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
var SOCIAL_LINKS = [
    {
        name: "CV",
        link: "https://drive.google.com/file/d/1z_XZDFhj8a-5XuPLDOLFbflYx9n3mLqT/view?usp=sharing"
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
        name: "Google Scholar",
        link: "https://scholar.google.com/citations?hl=en&user=IjUZQNUAAAAJ",
    }
];
// Assuming IAuthor, IPlace, ITag, and ISupervisor interfaces are defined elsewhere
function generatePaperTable(idName, PAPER) {
    if (PAPER === void 0) { PAPER = []; }
    var tableContainer = document.getElementById(idName);
    if (tableContainer && (PAPER === null || PAPER === void 0 ? void 0 : PAPER.length) > 0) {
        PAPER.forEach(function (paper) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
            // Create table row
            var row = document.createElement('tr');
            // Left-side image column
            var imageCell = document.createElement('td');
            imageCell.style.padding = '2.5%';
            imageCell.style.width = '25%';
            imageCell.style.verticalAlign = 'middle';
            imageCell.style.minWidth = '120px';
            var image = document.createElement('img');
            image.src = paper.image ? paper.image : '/path/to/default/image.png';
            image.alt = 'project image';
            image.style.width = 'auto';
            image.style.height = 'auto';
            image.style.maxWidth = '100%';
            image.loading = 'lazy';
            imageCell.appendChild(image);
            // Right-side content column
            var contentCell = document.createElement('td');
            contentCell.style.padding = '2.5%';
            contentCell.style.width = '75%';
            contentCell.style.verticalAlign = 'middle';
            // Title
            var title = document.createElement('h3');
            title.style.color = 'darkblue';
            if (paper.DOI) {
                var titleLink = document.createElement('a');
                titleLink.href = paper.DOI;
                titleLink.target = '_blank';
                titleLink.textContent = (_a = paper.title) !== null && _a !== void 0 ? _a : '';
                titleLink.style.color = 'inherit'; // Inherit color from parent
                titleLink.style.textDecoration = 'none'; // Optional: remove underline
                title.appendChild(titleLink);
            }
            else {
                title.textContent = (_b = paper.title) !== null && _b !== void 0 ? _b : '';
            }
            contentCell.appendChild(title);
            contentCell.appendChild(document.createElement('br'));
            // Authors
            (_c = paper === null || paper === void 0 ? void 0 : paper.authors) === null || _c === void 0 ? void 0 : _c.forEach(function (author, index) {
                var _a, _b;
                var authorElement;
                // If the author is marked as self, bold the name
                if (author.self) {
                    authorElement = document.createElement('strong');
                }
                else {
                    authorElement = document.createElement('span');
                }
                if (author.affiliation) {
                    var authorLink = document.createElement('a');
                    authorLink.href = author.affiliation;
                    authorLink.target = '_blank';
                    authorLink.textContent = (_a = author.name) !== null && _a !== void 0 ? _a : '';
                    authorLink.style.fontWeight = author.self ? 'bold' : 'normal';
                    authorLink.style.color = 'inherit';
                    contentCell.appendChild(authorLink);
                }
                else {
                    authorElement.textContent = (_b = author.name) !== null && _b !== void 0 ? _b : '';
                    contentCell.appendChild(authorElement);
                }
                if (paper.authors && index < paper.authors.length - 1) {
                    contentCell.appendChild(document.createTextNode(', '));
                }
            });
            // Year and Status
            var placeInfo = document.createElement('p');
            if ((_d = paper === null || paper === void 0 ? void 0 : paper.place) === null || _d === void 0 ? void 0 : _d.special) {
                var specialElement = document.createElement('p');
                specialElement.textContent = paper.place.special;
                specialElement.style.fontWeight = 'bold';
                specialElement.style.fontStyle = 'italic';
                specialElement.style.color = 'green';
                placeInfo.appendChild(specialElement);
            }
            if ((_e = paper === null || paper === void 0 ? void 0 : paper.place) === null || _e === void 0 ? void 0 : _e.name) {
                if ((_f = paper === null || paper === void 0 ? void 0 : paper.place) === null || _f === void 0 ? void 0 : _f.status) {
                    var statusElement = document.createElement('span');
                    statusElement.textContent = "".concat(paper.place.status, " - ");
                    statusElement.style.color = 'green';
                    placeInfo.appendChild(statusElement);
                }
                var placeElement = document.createElement('span');
                placeElement.textContent = paper.place.name;
                placeElement.style.color = 'green';
                placeInfo.appendChild(placeElement);
            }
            if ((_g = paper === null || paper === void 0 ? void 0 : paper.place) === null || _g === void 0 ? void 0 : _g.year) {
                var yearElement = document.createElement('b');
                yearElement.textContent = " [".concat(paper.place.year, "]");
                placeInfo.appendChild(yearElement);
            }
            if ((_h = paper === null || paper === void 0 ? void 0 : paper.place) === null || _h === void 0 ? void 0 : _h.prize) {
                var prizeElement = document.createElement('span');
                prizeElement.textContent = " - ".concat(paper.place.prize);
                prizeElement.style.color = 'red';
                placeInfo.appendChild(prizeElement);
            }
            if ((_j = paper === null || paper === void 0 ? void 0 : paper.place) === null || _j === void 0 ? void 0 : _j.nb) {
                var nbElement = document.createElement('p');
                nbElement.style.color = 'gray';
                nbElement.innerHTML = " <strong>NB</strong> - <span c>".concat(paper.place.nb, "</span>");
                placeInfo.appendChild(nbElement);
            }
            contentCell.appendChild(placeInfo);
            var tagCell = document.createElement('p');
            if ((paper === null || paper === void 0 ? void 0 : paper.tags) && ((_k = paper === null || paper === void 0 ? void 0 : paper.tags) === null || _k === void 0 ? void 0 : _k.length) > 0) {
                tagCell.appendChild(document.createTextNode('[ '));
            }
            // Tags (abstract/code)
            ((_l = paper === null || paper === void 0 ? void 0 : paper.tags) !== null && _l !== void 0 ? _l : []).forEach(function (tag, index) {
                var _a, _b;
                if (tag.link) {
                    var tagLink = document.createElement('a');
                    tagLink.href = tag.link;
                    tagLink.target = '_blank';
                    tagLink.textContent = (_a = tag.name) !== null && _a !== void 0 ? _a : '';
                    tagCell.appendChild(tagLink);
                }
                else {
                    tagCell.appendChild(document.createTextNode((_b = tag.name) !== null && _b !== void 0 ? _b : ''));
                }
                if (paper.tags && index < paper.tags.length - 1) {
                    tagCell.appendChild(document.createTextNode(' / '));
                }
            });
            if ((paper === null || paper === void 0 ? void 0 : paper.tags) && ((_m = paper === null || paper === void 0 ? void 0 : paper.tags) === null || _m === void 0 ? void 0 : _m.length) > 0) {
                tagCell.appendChild(document.createTextNode(' ]'));
            }
            contentCell.appendChild(tagCell);
            // Description
            var description = document.createElement('p');
            description.textContent = (_o = paper.description) !== null && _o !== void 0 ? _o : '';
            contentCell.appendChild(description);
            // Supervisors
            if ((paper === null || paper === void 0 ? void 0 : paper.super_visors) && paper.super_visors.length > 0) {
                var supervisorHeader = document.createElement('h3');
                supervisorHeader.style.color = 'darkblue';
                supervisorHeader.textContent = 'Supervisor(s): ';
                contentCell.appendChild(supervisorHeader);
                paper.super_visors.forEach(function (supervisor, index) {
                    var _a, _b;
                    if (supervisor.link) {
                        var supervisorLink = document.createElement('a');
                        supervisorLink.href = supervisor.link;
                        supervisorLink.target = '_blank';
                        supervisorLink.textContent = (_a = supervisor.name) !== null && _a !== void 0 ? _a : '';
                        contentCell.appendChild(supervisorLink);
                    }
                    else {
                        contentCell.appendChild(document.createTextNode((_b = supervisor.name) !== null && _b !== void 0 ? _b : ''));
                    }
                    if (paper.super_visors && index < paper.super_visors.length - 1) {
                        contentCell.appendChild(document.createTextNode(', '));
                    }
                });
            }
            // Append cells to row
            row.appendChild(imageCell);
            row.appendChild(contentCell);
            // Append row to table
            if (tableContainer) {
                tableContainer.appendChild(row);
            }
            else {
                console.error('Table container not found');
            }
        });
    }
    else if (!tableContainer) {
        console.error('Table container not found');
    }
}
function generateCourseTable(idName, PROJECTS_LIST) {
    if (PROJECTS_LIST === void 0) { PROJECTS_LIST = []; }
    var projectsTable = document.getElementById(idName);
    if (projectsTable) {
        PROJECTS_LIST.forEach(function (project) {
            var _a, _b, _c, _d;
            var row = document.createElement('tr');
            // Image column
            var imageCell = document.createElement('td');
            imageCell.style.padding = '2.5%';
            imageCell.style.width = '25%';
            imageCell.style.verticalAlign = 'middle';
            imageCell.style.minWidth = '120px';
            var img = document.createElement('img');
            img.src = project.image || '/path/to/default_image.png'; // Placeholder if no image is provided
            img.alt = "project image";
            img.style.width = 'auto';
            img.style.height = 'auto';
            img.style.maxWidth = '100%';
            img.loading = 'lazy';
            imageCell.appendChild(img);
            row.appendChild(imageCell);
            // Content column
            var contentCell = document.createElement('td');
            contentCell.style.padding = '2.5%';
            contentCell.style.width = '75%';
            contentCell.style.verticalAlign = 'middle';
            // Project Title
            var title = document.createElement('h3');
            title.style.color = 'darkblue';
            title.textContent = (_a = project.title) !== null && _a !== void 0 ? _a : '';
            contentCell.appendChild(title);
            // Authors
            var authorsText = document.createElement('p');
            ((_b = project.authors) !== null && _b !== void 0 ? _b : []).forEach(function (author, index) {
                var _a, _b, _c;
                var authorElement = author.self ? document.createElement('strong') : document.createElement('span');
                if (author.affiliation) {
                    var authorLink = document.createElement('a');
                    authorLink.href = author.affiliation;
                    authorLink.target = '_blank';
                    authorLink.textContent = (_a = author.name) !== null && _a !== void 0 ? _a : '';
                    authorLink.style.textDecoration = 'none';
                    authorLink.style.color = 'inherit';
                    authorElement.appendChild(authorLink);
                }
                else {
                    authorElement.textContent = (_b = author.name) !== null && _b !== void 0 ? _b : '';
                }
                authorsText.appendChild(authorElement);
                if (index < ((_c = project.authors) !== null && _c !== void 0 ? _c : []).length - 1) {
                    authorsText.appendChild(document.createTextNode(', '));
                }
            });
            contentCell.appendChild(authorsText);
            // Course and year
            if (project.course) {
                var courseInfo = document.createElement('em');
                courseInfo.style.color = 'darkgreen';
                courseInfo.textContent = project.course;
                contentCell.appendChild(courseInfo);
                // insert a space after the course
                contentCell.appendChild(document.createTextNode(' '));
            }
            // Links (code, video, etc.)
            var linksParagraph = document.createElement('span');
            if (project.code || project.video) {
                linksParagraph.appendChild(document.createTextNode(' - [ '));
            }
            if (project.code) {
                var codeLink = document.createElement('a');
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
                var videoLink = document.createElement('a');
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
            var description = document.createElement('p');
            description.textContent = (_c = project.description) !== null && _c !== void 0 ? _c : '';
            contentCell.appendChild(description);
            // Tools used
            if (project.tools && project.tools.length > 0) {
                var toolsParagraph = document.createElement('p');
                toolsParagraph.innerHTML = "<strong>Tools Used:</strong> ".concat(project.tools.join(', '));
                contentCell.appendChild(toolsParagraph);
            }
            if (project.super_visors && project.super_visors.length > 0) {
                var supervisorHeader = document.createElement('h3');
                supervisorHeader.style.color = 'darkblue';
                supervisorHeader.textContent = 'Supervisor(s): ';
                contentCell.appendChild(supervisorHeader);
                (_d = project === null || project === void 0 ? void 0 : project.super_visors) === null || _d === void 0 ? void 0 : _d.forEach(function (supervisor, index) {
                    var _a, _b;
                    if (supervisor.link) {
                        var supervisorLink = document.createElement('a');
                        supervisorLink.href = supervisor.link;
                        supervisorLink.target = '_blank';
                        supervisorLink.textContent = (_a = supervisor.name) !== null && _a !== void 0 ? _a : '';
                        contentCell.appendChild(supervisorLink);
                    }
                    else {
                        contentCell.appendChild(document.createTextNode((_b = supervisor.name) !== null && _b !== void 0 ? _b : ''));
                    }
                    if ((project === null || project === void 0 ? void 0 : project.super_visors) && index < project.super_visors.length - 1) {
                        contentCell.appendChild(document.createTextNode(', '));
                    }
                });
            }
            row.appendChild(contentCell);
            // Append the row to the table
            if (projectsTable) {
                projectsTable.appendChild(row);
            }
            else {
                console.error('Projects table not found');
            }
        });
    }
}
function socialMediaTable() {
    var container = document.getElementById('social-links-container');
    if (container) {
        SOCIAL_LINKS.forEach(function (social, index) {
            var linkElement = document.createElement('a');
            linkElement.href = social.link;
            linkElement.target = "_blank";
            linkElement.textContent = social.name;
            container.appendChild(linkElement);
            // Add spacing between links except the last one
            if (index < SOCIAL_LINKS.length - 1) {
                container.appendChild(document.createTextNode(' / '));
            }
        });
    }
    else {
        console.error('Container for social links not found');
    }
}
window.addEventListener('DOMContentLoaded', function () {
    generatePaperTable('ongoing-paper-container', ONGOING_PAPER);
    generatePaperTable('complete-paper-container', COMPLETED_PAPER);
    //generatePaperTable('under-review-paper-container', UNDER_REVIEW_PAPER);
    socialMediaTable();
    generateCourseTable('project-container', PROJECTS);
    generateCourseTable('assignment-project-container', ASSIGNMENT_PROJECTS);
    generateCourseTable('fun-project-container', FUN_PROJECTS);
});

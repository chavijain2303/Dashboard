export const tablesData = [
  {
    id: 1,
    title: "Department Overview",
    columns: [
      { key: "department", label: "Department", visible: true },
      { key: "totalTasks", label: "Total Tasks", visible: true },
      { key: "inProgress", label: "In Progress", visible: true },
      { key: "inPipeline", label: "In Pipeline", visible: true },
      { key: "forReview", label: "For Review", visible: true },
      { key: "unassigned", label: "Unassigned", visible: true },
      { key: "performance", label: "Performance", visible: true },
    ],
    data: [
      {
        department: "Branding",
        totalTasks: 45,
        inProgress: 5,
        inPipeline: 12,
        forReview: 10,
        unassigned: 3,
        performance: "High",
        additionalDetails: {
          manager: "yatin",
          budget: "$50,000",
          location: "Building A",
          contact: "yatin@branding.com",
        },
      },
      {
        department: "Sales",
        totalTasks: 40,
        inProgress: 6,
        inPipeline: 10,
        forReview: 15,
        unassigned: 2,
        performance: "Medium",
        additionalDetails: {
          manager: "Gunjan",
          budget: "$30,000",
          location: "Building B",
          contact: "gunjan@sales.com",
        },
      },
      {
        department: "Marketing",
        totalTasks: 50,
        inProgress: 8,
        inPipeline: 15,
        forReview: 12,
        unassigned: 5,
        performance: "Low",
        additionalDetails: {
          manager: "Rina",
          budget: "$40,000",
          location: "Building C",
          contact: "rina@marketing.com",
        },
      },
      {
        department: "Development",
        totalTasks: 60,
        inProgress: 10,
        inPipeline: 20,
        forReview: 15,
        unassigned: 10,
        performance: "High",
        additionalDetails: {
          manager: "Samir",
          budget: "$100,000",
          location: "Building D",
          contact: "samir@development.com",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Task Details",
    columns: [
      { key: "status", label: "Status", visible: true },
      { key: "task", label: "Task", visible: true },
      { key: "assignedTo", label: "Assigned To", visible: true },
      { key: "impact", label: "Impact", visible: true },
      { key: "completeWithin", label: "Complete Within", visible: true },
    ],
    data: [
      {
        status: "In Progress",
        task: "Update edit in department",
        assignedTo: "Aditya",
        impact: "High",
        completeWithin: "A Week",
        additionalDetails: {
          description: "Editing department details to ensure accuracy.",
          priority: "High",
          dueDate: "2024-07-10",
        },
      },
      {
        status: "Pending",
        task: "Monthly Performance Review",
        assignedTo: "Sajal",
        impact: "Low",
        completeWithin: "A Month",
        additionalDetails: {
          description: "Reviewing monthly performance metrics.",
          priority: "Medium",
          dueDate: "2024-07-31",
        },
      },
      {
        status: "Completed",
        task: "Create marketing strategy",
        assignedTo: "Neha",
        impact: "Medium",
        completeWithin: "2 Weeks",
        additionalDetails: {
          description: "Developing a new marketing strategy for the upcoming quarter.",
          priority: "High",
          dueDate: "2024-07-20",
        },
      },
      {
        status: "In Progress",
        task: "Implement new feature",
        assignedTo: "Raj",
        impact: "High",
        completeWithin: "3 Days",
        additionalDetails: {
          description: "Adding a new feature to the application as per client request.",
          priority: "High",
          dueDate: "2024-07-05",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Employee Details",
    columns: [
      { key: "name", label: "Name", visible: true },
      { key: "position", label: "Position", visible: true },
      { key: "department", label: "Department", visible: true },
      { key: "email", label: "Email", visible: true },
      { key: "status", label: "Status", visible: true },
    ],
    data: [
      {
        name: "Daksh",
        position: "Manager",
        department: "Development",
        email: "daksh.doe@development.com",
        status: "Active",
        additionalDetails: {
          phone: "123-456-7890",
          location: "Building D",
          hireDate: "2022-01-15",
        },
      },
      {
        name: "Deepika",
        position: "Executive",
        department: "Marketing",
        email: "deepika.smith@marketing.com",
        status: "On Leave",
        additionalDetails: {
          phone: "987-654-3210",
          location: "Building C",
          hireDate: "2021-05-20",
        },
      },
      {
        name: "yatin",
        position: "Developer",
        department: "Development",
        email: "yatin.johnson@development.com",
        status: "Active",
        additionalDetails: {
          phone: "555-123-4567",
          location: "Building D",
          hireDate: "2023-03-10",
        },
      },
      {
        name: "Yah",
        position: "Sales Representative",
        department: "Sales",
        email: "yash.brown@sales.com",
        status: "Active",
        additionalDetails: {
          phone: "444-321-0987",
          location: "Building B",
          hireDate: "2020-09-25",
        },
      },
    ],
  },
];

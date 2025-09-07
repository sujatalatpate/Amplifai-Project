export const stats = [
    { title: "Consolidated Revenue", value: "€24.5B", change: "+12.5%" },
    { title: "Net Profit", value: "€40.5M", change: "+8.3%" },
    { title: "EBITDA Margin", value: "14.6%", change: "-3.6%" },
    { title: "Working Capital", value: "€25.7M", change: "-3.3%" },
  ];

export const lineData = {
    labels: [
      "Jul '24","Aug '24","Sep '24","Oct '24","Nov '24","Dec '24",
      "Jan '25","Feb '25","Mar '25","Apr '25","May '25","Jun '25"
    ],
    datasets: [
      {
        label: "Revenue",
        data: [90,85,80,82,88,95,81,83,87,89,92,98],
        tension: 0.3,
        borderColor: "rgba(54,162,235,1)",
        backgroundColor: "rgba(54,162,235,0.08)",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: "Profit Trend",
        data: [40,42,38,45,50,47,43,44,46,48,49,51],
        tension: 0.3,
        borderColor: "rgba(255,159,64,1)",
        backgroundColor: "rgba(255,159,64,0.06)",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

export const lineOptions = {
    responsive: true,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { position: 'bottom' },
      tooltip: {
        callbacks: {
          title: (items) => items[0].label,
          label: (ctx) => `${ctx.dataset.label}: ${ctx.formattedValue}M`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: (value) => value + "M",
        },
      },
    },
  };

export const barData = {
    labels: ["Jan","Feb","Mar","Apr","May","Jun"],
    datasets: [
      { label: "Revenue", data: [85,90,86,88,92,95], backgroundColor: "rgba(54,162,235,0.8)" },
      { label: "Operating Expense", data: [70,72,71,69,73,74], backgroundColor: "rgba(153,102,255,0.8)" },
      { label: "COGS", data: [60,65,63,62,64,66], backgroundColor: "rgba(255,206,86,0.8)" },
    ]
  };

export const barOptions = {
    responsive: true,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { position: 'bottom' },
      tooltip: {
        callbacks: {
          title: (items) => items[0].label,
          label: (ctx) => `${ctx.dataset.label}: ${ctx.formattedValue}M`
        }
      }
    },
    scales: { y: { beginAtZero: true } }
  };

export const entities = [
  {
    company: "NextGen Software Ltd.",
    revenue: "€68.3M",
    netProfit: "€8.1M",
    ebitda: "€6.4M",
    cashFlow: "€5.2M",
    wcCycle: 52,
    change: "+26.5%",
  },
  {
    company: "Global Tech Solutions",
    revenue: "€62.6M",
    netProfit: "€6.5M",
    ebitda: "€5.3M",
    cashFlow: "€4.5M",
    wcCycle: 76,
    change: "+19.3%",
  },
  {
    company: "Innovitive Tech Solutions",
    revenue: "€54.6M",
    netProfit: "€5.9M",
    ebitda: "€3.8M",
    cashFlow: "€3.8M",
    wcCycle: 45,
    change: "+18.5%",
  },
  {
    company: "Creative Design Group",
    revenue: "€36.5M",
    netProfit: "€4.1M",
    ebitda: "€0.9M",
    cashFlow: "€2.3M",
    wcCycle: 88,
    change: "+0.9%",
  },
  {
    company: "Digital Dynamics Inc.",
    revenue: "€30.2M",
    netProfit: "€3.9M",
    ebitda: "€1.5M",
    cashFlow: "€2.5M",
    wcCycle: 29,
    change: "-3.9%",
  },
  {
    company: "Helix Digital Innovations",
    revenue: "€22.3M",
    netProfit: "€2.0M",
    ebitda: "€1.0M",
    cashFlow: "€0.8M",
    wcCycle: 36,
    change: "-1.5%",
  },
];
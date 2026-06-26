"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";

// --- CUSTOM SVG OUTLINE ICONS (Matching 1.5px-2px stroke requirements) ---
function DashboardIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
    </svg>
  );
}

function ContentIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );
}

function AudienceIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function RevenueIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function SparklesIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-5.714L5 12l5.714-2.286L13 3z" />
    </svg>
  );
}

function ArrowUpRight({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19L19 5m0 0H8m11 0v11" />
    </svg>
  );
}

function ArrowDownRight({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5l14 14m0 0H8m11 0V8" />
    </svg>
  );
}

function SendIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

function StarIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.246.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.18 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.883c-.77-.564-.37-1.81.588-1.81h4.906a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

function SearchIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function ArrowLeftIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  );
}

// --- SUB-COMPONENTS ---

// Logo
function Logo({ className = "" }) {
  return (
    <span className={`font-signifier text-[22px] tracking-[-0.015em] text-ink font-normal ${className}`}>
      Steep
    </span>
  );
}

// Avatar Badge: 32px circle, monogram in Ink at 13px weight 500, colored pastel background
function AvatarBadge({ initials, colorClass = "bg-apricot-wash", className = "" }) {
  return (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-ink text-[13px] font-medium tracking-tight shadow-[0_0_0_1px_rgba(23,25,28,0.08)] ${colorClass} ${className}`}>
      {initials}
    </div>
  );
}

// Delta Indicator: Green/red text with arrow at 12px
function DeltaIndicator({ value, isPositive }) {
  return (
    <span className={`inline-flex items-center gap-0.5 text-[12px] font-w480 tracking-tight ${isPositive ? "text-emerald-700" : "text-rose-700"}`}>
      {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
      {value}
    </span>
  );
}

// Custom SVG Line Chart with Tooltip Interaction
function DynamicLineChart({ data, timeRange, strokeColor = "#17191c", gradientId }) {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoverCoords, setHoverCoords] = useState({ x: 0, y: 0 });

  // Map values to viewbox: width 500, height 120
  const width = 500;
  const height = 120;
  const paddingX = 10;
  const paddingY = 15;

  const minVal = Math.min(...data);
  const maxVal = Math.max(...data);
  const valRange = maxVal - minVal || 1;

  const points = useMemo(() => {
    return data.map((val, idx) => {
      const x = paddingX + (idx / (data.length - 1)) * (width - 2 * paddingX);
      const y = height - paddingY - ((val - minVal) / valRange) * (height - 2 * paddingY);
      return { x, y, value: val };
    });
  }, [data, minVal, valRange]);

  const linePath = useMemo(() => {
    if (points.length === 0) return "";
    return points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  }, [points]);

  const areaPath = useMemo(() => {
    if (points.length === 0) return "";
    return `${linePath} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`;
  }, [points, linePath]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    // Find the closest point in the X domain
    let closestIdx = 0;
    let minDiff = Infinity;
    points.forEach((p, idx) => {
      const diff = Math.abs((p.x / width) * rect.width - clientX);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });

    setHoverIndex(closestIdx);
    setHoverCoords({
      x: (points[closestIdx].x / width) * rect.width,
      y: (points[closestIdx].y / height) * rect.height,
    });
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className="relative w-full h-[140px] select-none">
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <defs>
          <linearGradient id={`grad-${gradientId}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={strokeColor} stopOpacity="0.12" />
            <stop offset="100%" stopColor={strokeColor} stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        <line x1={0} y1={height / 2} x2={width} y2={height / 2} stroke="#f1f1f2" strokeDasharray="3" />
        <line x1={0} y1={height - paddingY} x2={width} y2={height - paddingY} stroke="#ededef" />

        {/* Gradient fill */}
        <path d={areaPath} fill={`url(#grad-${gradientId})`} />

        {/* Main Line */}
        <path d={linePath} fill="none" stroke={strokeColor} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />

        {/* Key dots */}
        {points.map((p, idx) => (
          <circle
            key={idx}
            cx={p.x}
            cy={p.y}
            r={hoverIndex === idx ? "4" : "1.5"}
            fill={hoverIndex === idx ? strokeColor : "#ffffff"}
            stroke={strokeColor}
            strokeWidth="1.5"
            className="transition-all duration-150"
          />
        ))}

        {/* Hover vertical line */}
        {hoverIndex !== null && (
          <line
            x1={points[hoverIndex].x}
            y1={0}
            x2={points[hoverIndex].x}
            y2={height}
            stroke="#d3e3fc"
            strokeWidth="1"
            strokeDasharray="2"
          />
        )}
      </svg>

      {/* Floating Tooltip inside HTML overlay */}
      {hoverIndex !== null && (
        <div
          className="absolute z-30 pointer-events-none bg-pure-white px-2 py-1 text-caption text-ink shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-dove/30 rounded-lg flex flex-col -translate-x-1/2 -translate-y-12 transition-all duration-100"
          style={{ left: hoverCoords.x, top: hoverCoords.y }}
        >
          <span className="text-[11px] text-graphite font-w430">Day {hoverIndex + 1}</span>
          <span className="font-w480 text-ink leading-tight">
            {points[hoverIndex].value.toLocaleString()} views
          </span>
        </div>
      )}
    </div>
  );
}

// Donut Chart: Custom HTML / SVG donut matching color style guide
function SVGDonutChart({ slices, size = 110 }) {
  const radius = 35;
  const strokeWidth = 14;
  const circumference = 2 * Math.PI * radius; // 220

  let currentOffset = 0;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle cx="50" cy="50" r={radius} fill="transparent" stroke="#f1f1f2" strokeWidth={strokeWidth} />
        {slices.map((slice, i) => {
          const dashArray = `${circumference}`;
          const dashOffset = circumference - (slice.value / 100) * circumference;
          const offset = currentOffset;
          currentOffset += (slice.value / 100) * circumference;

          return (
            <circle
              key={i}
              cx="50"
              cy="50"
              r={radius}
              fill="transparent"
              stroke={slice.color}
              strokeWidth={strokeWidth}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              style={{ strokeDashoffset: dashOffset, transform: `rotate(${(offset / circumference) * 360}deg)`, transformOrigin: "50px 50px" }}
              className="transition-all duration-700"
            />
          );
        })}
      </svg>
      {/* Central annotation */}
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-[12px] text-graphite font-w430">Top</span>
        <span className="text-[14px] text-ink font-w480 tracking-tight">45%</span>
      </div>
    </div>
  );
}

// Simulated YouTube Channel Database
const channelDatabase = {
  "28d": {
    views: "1,248,912",
    viewsDelta: "+12.4%",
    viewsIsPositive: true,
    watchTime: "92,410 hrs",
    watchTimeDelta: "+8.1%",
    watchTimeIsPositive: true,
    subscribers: "14,204",
    subscribersDelta: "+15.6%",
    subscribersIsPositive: true,
    revenue: "$8,412.50",
    revenueDelta: "+22.1%",
    revenueIsPositive: true,
    viewsChartData: [45, 48, 52, 42, 38, 50, 58, 62, 59, 65, 72, 60, 58, 68, 74, 82, 80, 89, 94, 85, 80, 92, 98, 87, 85, 96, 102, 110],
    trafficSlices: [
      { name: "External Blogs", value: 45, color: "#5d2a1a" }, // Rust
      { name: "YouTube Search", value: 30, color: "#17191c" }, // Ink
      { name: "Suggested Videos", value: 25, color: "#777b86" }, // Graphite
    ],
    deviceBars: [
      { label: "Mobile", pct: 60, color: "bg-[#4a90e2]" },
      { label: "Desktop", pct: 30, color: "bg-ink" },
      { label: "Tablet / TV", pct: 10, color: "bg-graphite" },
    ],
    regions: [
      { name: "United States", pct: 42, count: "524.5k" },
      { name: "India", pct: 28, count: "349.7k" },
      { name: "United Kingdom", pct: 12, count: "149.8k" },
      { name: "Germany", pct: 8, count: "99.9k" },
      { name: "Brazil", pct: 10, count: "124.9k" },
    ],
    topVideos: [
      { title: "Building a Design System in Next.js v15+", views: "148,200", duration: "18:42", retention: "64%" },
      { title: "Daylight Workspace Design — A Visual Guide", views: "122,800", duration: "12:15", retention: "58%" },
      { title: "Why Typography is the Hero of Your Web App", views: "98,400", duration: "15:02", retention: "52%" },
    ]
  },
  "90d": {
    views: "4,128,490",
    viewsDelta: "+18.2%",
    viewsIsPositive: true,
    watchTime: "312,850 hrs",
    watchTimeDelta: "+11.4%",
    watchTimeIsPositive: true,
    subscribers: "48,510",
    subscribersDelta: "+14.1%",
    subscribersIsPositive: true,
    revenue: "$28,940.00",
    revenueDelta: "+25.8%",
    revenueIsPositive: true,
    viewsChartData: [
      38, 42, 35, 45, 48, 52, 40, 39, 48, 55, 60, 58, 62, 70, 68, 74, 82, 75, 80, 88, 92, 85,
      89, 94, 98, 102, 95, 92, 105, 112, 108, 114, 120, 110, 115, 122, 128, 124, 130, 138,
      132, 135, 142, 148, 140, 145, 152, 158, 150, 155, 162, 168, 160, 165, 172, 178, 170,
      175, 182, 188, 180, 185, 192, 198, 190, 195, 202, 208, 200, 205, 212, 218, 210, 215,
      222, 228, 220, 225, 232, 238, 230, 235, 242, 248, 240, 245, 252, 258, 264, 270
    ],
    trafficSlices: [
      { name: "External Blogs", value: 42, color: "#5d2a1a" },
      { name: "YouTube Search", value: 33, color: "#17191c" },
      { name: "Suggested Videos", value: 25, color: "#777b86" },
    ],
    deviceBars: [
      { label: "Mobile", pct: 58, color: "bg-[#4a90e2]" },
      { label: "Desktop", pct: 32, color: "bg-ink" },
      { label: "Tablet / TV", pct: 10, color: "bg-graphite" },
    ],
    regions: [
      { name: "United States", pct: 41, count: "1.69M" },
      { name: "India", pct: 30, count: "1.23M" },
      { name: "United Kingdom", pct: 11, count: "454k" },
      { name: "Germany", pct: 7, count: "289k" },
      { name: "Brazil", pct: 11, count: "454k" },
    ],
    topVideos: [
      { title: "Building a Design System in Next.js v15+", views: "512,800", duration: "18:42", retention: "62%" },
      { title: "Daylight Workspace Design — A Visual Guide", views: "420,500", duration: "12:15", retention: "57%" },
      { title: "Why Typography is the Hero of Your Web App", views: "318,400", duration: "15:02", retention: "51%" },
    ]
  },
  "365d": {
    views: "18,450,210",
    viewsDelta: "+24.5%",
    viewsIsPositive: true,
    watchTime: "1,340,900 hrs",
    watchTimeDelta: "+19.8%",
    watchTimeIsPositive: true,
    subscribers: "212,400",
    subscribersDelta: "+22.3%",
    subscribersIsPositive: true,
    revenue: "$124,560.00",
    revenueDelta: "+35.4%",
    revenueIsPositive: true,
    viewsChartData: [
      120, 132, 125, 140, 155, 148, 160, 172, 168, 182, 195, 202, 198, 212, 220, 215, 230, 245,
      238, 250, 262, 258, 270, 285, 292, 288, 302, 315, 310, 325, 340, 335, 350, 362, 358, 370
    ],
    trafficSlices: [
      { name: "External Blogs", value: 40, color: "#5d2a1a" },
      { name: "YouTube Search", value: 35, color: "#17191c" },
      { name: "Suggested Videos", value: 25, color: "#777b86" },
    ],
    deviceBars: [
      { label: "Mobile", pct: 55, color: "bg-[#4a90e2]" },
      { label: "Desktop", pct: 35, color: "bg-ink" },
      { label: "Tablet / TV", pct: 10, color: "bg-graphite" },
    ],
    regions: [
      { name: "United States", pct: 39, count: "7.19M" },
      { name: "India", pct: 32, count: "5.90M" },
      { name: "United Kingdom", pct: 11, count: "2.02M" },
      { name: "Germany", pct: 7, count: "1.29M" },
      { name: "Brazil", pct: 11, count: "2.02M" },
    ],
    topVideos: [
      { title: "Building a Design System in Next.js v15+", views: "2.42M", duration: "18:42", retention: "60%" },
      { title: "Daylight Workspace Design — A Visual Guide", views: "1.89M", duration: "12:15", retention: "56%" },
      { title: "Why Typography is the Hero of Your Web App", views: "1.42M", duration: "15:02", retention: "50%" },
    ]
  }
};

export default function Home() {
  const [viewMode, setViewMode] = useState("landing"); // 'landing' or 'console'
  const [timeRange, setTimeRange] = useState("28d"); // '28d', '90d', '365d'
  
  // Console Tab View inside active shell
  const [activeTab, setActiveTab] = useState("Dashboard"); // 'Dashboard', 'Content', 'Audience', 'Revenue', 'AI Insights'

  // AI Chat Assistant State
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: "assistant",
      text: "Hello! I am your Steep Assistant. I can analyze your subscriber trends, geographical breakdowns, or audience sources.",
      hasChart: false
    }
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, isTyping]);

  // Current active statistics dataset
  const activeStats = useMemo(() => {
    return channelDatabase[timeRange];
  }, [timeRange]);

  // Chat queries responses
  const triggerAIResponse = (queryText) => {
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let responseMsg = {};

      if (queryText.toLowerCase().includes("subscriber") || queryText.toLowerCase().includes("traffic")) {
        responseMsg = {
          id: Date.now(),
          sender: "assistant",
          title: "Subscribers driven by Short-form and SEO",
          text: `Your subscriber growth increased by **${activeStats.subscribersDelta}** during this period. Short-form tutorials and external blog embeddings are driving the highest conversion rate (+32%), outperforming direct search channels.`,
          hasChart: true,
          chartType: "subscribers"
        };
      } else if (queryText.toLowerCase().includes("where") || queryText.toLowerCase().includes("audience") || queryText.toLowerCase().includes("region")) {
        responseMsg = {
          id: Date.now(),
          sender: "assistant",
          title: "Audience density concentrated in NA and Asia",
          text: `Your traffic is primarily concentrated in the **United States (${activeStats.regions[0].pct}%)** and **India (${activeStats.regions[1].pct}%)**. Brazil is showing the highest growth rate (+24%) this period, responding to translated captions.`,
          hasChart: true,
          chartType: "regions"
        };
      } else {
        responseMsg = {
          id: Date.now(),
          sender: "assistant",
          title: "Channel performance index stable",
          text: `We compiled metrics for "${queryText}". Daily views remain stable with a ${activeStats.viewsDelta} trend line. Audience retention is holding steady at a 55% average duration, well above benchmark norms.`,
          hasChart: false
        };
      }

      setChatMessages((prev) => [...prev, responseMsg]);
    }, 1200);
  };

  const handleSendChat = (e) => {
    if (e) e.preventDefault();
    if (!chatInput.trim()) return;

    const userQuery = chatInput;
    setChatMessages((prev) => [...prev, { id: Date.now(), sender: "user", text: userQuery }]);
    setChatInput("");
    triggerAIResponse(userQuery);
  };

  const handleQuickQuery = (query) => {
    setChatMessages((prev) => [...prev, { id: Date.now(), sender: "user", text: query }]);
    triggerAIResponse(query);
  };

  // --- RENDERING LANDING PAGE ---
  if (viewMode === "landing") {
    return (
      <div className="flex-1 bg-white font-sohne flex flex-col relative overflow-x-hidden">
        {/* Sticky Top Navigation */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-dove/20 h-[68px] px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Logo />
            <nav className="hidden md:flex items-center gap-8 text-[15px] font-w450 tracking-[-0.009em]">
              <span className="text-ink cursor-pointer hover:opacity-75 transition-opacity">Product</span>
              <span className="text-graphite cursor-pointer hover:opacity-75 transition-opacity">Resources</span>
              <span className="text-graphite cursor-pointer hover:opacity-75 transition-opacity">Customers</span>
              <span className="text-graphite cursor-pointer hover:opacity-75 transition-opacity">Pricing</span>
            </nav>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setViewMode("console")}
              className="text-ink text-[15px] font-w450 py-2 hover:opacity-75 transition-opacity cursor-pointer"
            >
              Sign In
            </button>
            <button
              onClick={() => setViewMode("console")}
              className="rounded-full bg-ink text-pure-white text-[15px] font-w450 py-2 px-5 tracking-[-0.009em] hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
            >
              Enter Console
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col">
          <section className="relative w-full max-w-7xl mx-auto py-16 lg:py-32 px-6 flex flex-col items-center justify-center">
            {/* The peach-lit dawn radial glow background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] max-w-[650px] h-[400px] lg:h-[500px] rounded-full bg-apricot-wash opacity-[0.35] blur-[80px] lg:blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center">
              <h1 className="text-heading lg:text-heading-lg font-signifier text-ink leading-none font-normal tracking-[-1.6px] max-w-xl">
                Soft dawn on a marble dashboard.
              </h1>
              <p className="mt-6 text-body-lg text-ash max-w-lg leading-normal tracking-[-0.16px]">
                A daylight analytics workspace designed for modern creators. Achromatic chrome, editorial typography, and data visualisations that speak for themselves.
              </p>

              <div className="mt-8 flex items-center gap-6">
                <button
                  onClick={() => setViewMode("console")}
                  className="rounded-full bg-ink text-pure-white text-[15px] font-w450 py-3 px-7 tracking-[-0.009em] hover:opacity-90 transition-all shadow-md cursor-pointer"
                >
                  Launch Dashboard
                </button>
                <a
                  href="#demo"
                  className="text-ink text-[15px] font-w450 py-3 hover:opacity-75 transition-opacity inline-flex items-center gap-1.5"
                >
                  Explore Demo Details
                </a>
              </div>
            </div>

            {/* Desktop Absolute Floating Cards / Mobile Grid wrapper */}
            <div className="relative w-full max-w-5xl mx-auto mt-20 lg:h-[450px] z-10">
              
              {/* Desktop Absolute Layout (Hidden on Mobile/Tablet) */}
              <div className="hidden lg:block">
                {/* 1. Stat Card with Delta & Avatar badge */}
                <div className="absolute top-[5%] left-[0%] w-[250px] bg-pure-white rounded-cards p-5 shadow-subtle hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[13px] text-graphite font-w430 tracking-tight">Channel Subscribers</span>
                    <AvatarBadge initials="YT" colorClass="bg-[#d2f4ea]" className="-mt-1 -mr-1" />
                  </div>
                  <div className="font-signifier text-[28px] text-ink font-normal leading-tight">
                    2,408,124
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    <DeltaIndicator value="+14.2%" isPositive={true} />
                    <span className="text-caption text-graphite font-w430">this month</span>
                  </div>
                </div>

                {/* 2. Warm Data Card (Traffic Sources Donut) */}
                <div className="absolute top-[0%] right-[3%] w-[280px] bg-apricot-wash rounded-cards p-5 shadow-subtle hover:translate-y-[-4px] transition-transform duration-300">
                  <h3 className="text-[15px] text-ink font-w500 tracking-tight mb-4">Traffic Sources</h3>
                  <div className="flex items-center gap-4">
                    <SVGDonutChart
                      slices={[
                        { name: "External", value: 45, color: "#5d2a1a" },
                        { name: "Search", value: 30, color: "#17191c" },
                        { name: "Suggested", value: 25, color: "#777b86" }
                      ]}
                      size={90}
                    />
                    <div className="flex flex-col gap-1.5 text-caption font-w430">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rust" />
                        <span className="text-ink">Blogs (45%)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-ink" />
                        <span className="text-ink">Search (30%)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Cool Data Card (Hourly Views Bar) */}
                <div className="absolute bottom-[2%] left-[4%] w-[290px] bg-sky-wash rounded-cards p-5 shadow-subtle hover:translate-y-[-4px] transition-transform duration-300">
                  <h3 className="text-[15px] text-ink font-w500 tracking-tight mb-3">Daily Growth Index</h3>
                  <div className="flex h-20 items-end justify-between px-2 gap-4 mt-2">
                    <div className="flex flex-col items-center flex-1 gap-1">
                      <div className="w-full bg-[#4a90e2] rounded-t-[4px] h-[55%]" />
                      <span className="text-[11px] text-graphite font-w430">Mon</span>
                    </div>
                    <div className="flex flex-col items-center flex-1 gap-1">
                      <div className="w-full bg-ink rounded-t-[4px] h-[85%]" />
                      <span className="text-[11px] text-graphite font-w430">Wed</span>
                    </div>
                    <div className="flex flex-col items-center flex-1 gap-1">
                      <div className="w-full bg-graphite rounded-t-[4px] h-[40%]" />
                      <span className="text-[11px] text-graphite font-w430">Fri</span>
                    </div>
                    <div className="flex flex-col items-center flex-1 gap-1">
                      <div className="w-full bg-[#4a90e2] rounded-t-[4px] h-[95%]" />
                      <span className="text-[11px] text-graphite font-w430">Sun</span>
                    </div>
                  </div>
                </div>

                {/* 4. Region Stats Card */}
                <div className="absolute bottom-[8%] right-[8%] w-[260px] bg-pure-white rounded-cards p-5 shadow-subtle hover:translate-y-[-4px] transition-transform duration-300">
                  <h3 className="text-[15px] text-ink font-w500 tracking-tight mb-4">Top Regions</h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center text-[14px]">
                      <span className="text-graphite font-w430">United States</span>
                      <span className="text-ink font-w480">42%</span>
                    </div>
                    <div className="flex justify-between items-center text-[14px]">
                      <span className="text-graphite font-w430">India</span>
                      <span className="text-ink font-w480">28%</span>
                    </div>
                    <div className="flex justify-between items-center text-[14px]">
                      <span className="text-graphite font-w430">United Kingdom</span>
                      <span className="text-ink font-w480">12%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Grid Layout (Visible on Mobile/Tablet) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
                {/* 1. Stat Card */}
                <div className="bg-pure-white rounded-cards p-5 border border-dove/20 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[13px] text-graphite font-w430">Channel Subscribers</span>
                    <AvatarBadge initials="YT" colorClass="bg-[#d2f4ea]" />
                  </div>
                  <div className="font-signifier text-[26px] text-ink font-normal leading-tight">
                    2,408,124
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    <DeltaIndicator value="+14.2%" isPositive={true} />
                    <span className="text-caption text-graphite font-w430">this month</span>
                  </div>
                </div>

                {/* 2. Warm Data Card */}
                <div className="bg-apricot-wash rounded-cards p-5 shadow-sm">
                  <h3 className="text-[15px] text-ink font-w500 mb-4">Traffic Sources</h3>
                  <div className="flex items-center gap-4">
                    <SVGDonutChart
                      slices={[
                        { name: "External", value: 45, color: "#5d2a1a" },
                        { name: "Search", value: 30, color: "#17191c" },
                        { name: "Suggested", value: 25, color: "#777b86" }
                      ]}
                      size={80}
                    />
                    <div className="flex flex-col gap-1.5 text-caption font-w430">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 bg-rust h-2 rounded-full" />
                        <span className="text-ink">Blogs (45%)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 bg-ink h-2 rounded-full" />
                        <span className="text-ink">Search (30%)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Cool Data Card */}
                <div className="bg-sky-wash rounded-cards p-5 shadow-sm">
                  <h3 className="text-[15px] text-ink font-w500 mb-3">Daily Growth Index</h3>
                  <div className="flex h-16 items-end justify-between gap-3 mt-2">
                    <div className="flex flex-col items-center flex-1 gap-1">
                      <div className="w-full bg-[#4a90e2] rounded-t-[4px] h-[55%]" />
                      <span className="text-[10px] text-graphite">Mon</span>
                    </div>
                    <div className="flex flex-col items-center flex-1 gap-1">
                      <div className="w-full bg-ink rounded-t-[4px] h-[85%]" />
                      <span className="text-[10px] text-graphite">Wed</span>
                    </div>
                    <div className="flex flex-col items-center flex-1 gap-1">
                      <div className="w-full bg-graphite rounded-t-[4px] h-[40%]" />
                      <span className="text-[10px] text-graphite">Fri</span>
                    </div>
                  </div>
                </div>

                {/* 4. Region Stats */}
                <div className="bg-pure-white rounded-cards p-5 border border-dove/20 shadow-sm">
                  <h3 className="text-[15px] text-ink font-w500 mb-4">Top Regions</h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center text-[14px]">
                      <span className="text-graphite">United States</span>
                      <span className="text-ink font-w480">42%</span>
                    </div>
                    <div className="flex justify-between items-center text-[14px]">
                      <span className="text-graphite">India</span>
                      <span className="text-ink font-w480">28%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Delineated Details Section */}
          <section id="demo" className="bg-fog border-t border-dove/30 py-20 px-6">
            <div className="max-w-5xl mx-auto">
              <span className="text-[13px] uppercase tracking-[1px] text-graphite font-w500">Daylight Concept Workspace</span>
              <h2 className="text-subheading lg:text-heading font-signifier text-ink leading-tight mt-3 mb-10 max-w-xl">
                The product does the talking.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Highlight A */}
                <div className="bg-pure-white rounded-cards p-6 shadow-subtle flex flex-col justify-between h-[200px]">
                  <div>
                    <h4 className="text-[16px] text-ink font-w500 tracking-tight">Editorial Typographic Pair</h4>
                    <p className="mt-3 text-caption text-ash leading-relaxed">
                      Söhne controls all functional layout parameters while Signifier asserts itself exclusively for high-emphasis headlines.
                    </p>
                  </div>
                  <span className="text-caption text-rust font-w450">Söhne & Signifier</span>
                </div>

                {/* Highlight B */}
                <div className="bg-pure-white rounded-cards p-6 shadow-subtle flex flex-col justify-between h-[200px]">
                  <div>
                    <h4 className="text-[16px] text-ink font-w500 tracking-tight">Achromatic Chrome</h4>
                    <p className="mt-3 text-caption text-ash leading-relaxed">
                      Interface borders are minimized, using generous border-radii of 24px and subtle drop shadows to outline panels instead of heavy lines.
                    </p>
                  </div>
                  <span className="text-caption text-rust font-w450">Light daylight theme</span>
                </div>

                {/* Highlight C */}
                <div className="bg-pure-white rounded-cards p-6 shadow-subtle flex flex-col justify-between h-[200px]">
                  <div>
                    <h4 className="text-[16px] text-ink font-w500 tracking-tight">Intentional Contrast</h4>
                    <p className="mt-3 text-caption text-ash leading-relaxed">
                      Spot highlights are limited to Rust peach and Sky blue. Only one solid CTA button per screen does the asking.
                    </p>
                  </div>
                  <span className="text-caption text-rust font-w450">Restrained spot color</span>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-white border-t border-dove/20 py-8 px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between text-caption text-graphite">
          <div className="flex items-center gap-3">
            <Logo className="opacity-60" />
            <span>— daylight analytics workspace</span>
          </div>
          <span className="mt-3 sm:mt-0 font-w430">© 2026 Steep. Pair-programmed with Antigravity.</span>
        </footer>
      </div>
    );
  }

  // --- RENDERING PRODUCT CONSOLE ---
  return (
    <div className="flex-1 bg-white font-sohne flex flex-row h-screen overflow-hidden select-none">
      
      {/* 1. Left Sidebar Navigation (240px width, Fog background, borderless) */}
      <aside className="w-[240px] bg-fog flex flex-col flex-shrink-0 h-full py-6 px-4">
        {/* Top Header Logo */}
        <div className="flex items-center justify-between px-2 mb-8">
          <Logo />
          <button
            onClick={() => setViewMode("landing")}
            className="text-graphite hover:text-ink text-[12px] font-w450 border border-dove/30 bg-pure-white py-1 px-2.5 rounded-full flex items-center gap-1 transition-colors"
          >
            <ArrowLeftIcon className="w-3 h-3" /> Exit
          </button>
        </div>

        {/* Primary nav items with 16px icons + 15px Sohne text */}
        <div className="flex flex-col gap-1.5">
          {[
            { name: "Dashboard", icon: <DashboardIcon className="w-4.5 h-4.5" /> },
            { name: "Content", icon: <ContentIcon className="w-4.5 h-4.5" /> },
            { name: "Audience", icon: <AudienceIcon className="w-4.5 h-4.5" /> },
            { name: "Revenue", icon: <RevenueIcon className="w-4.5 h-4.5" /> }
          ].map((item) => {
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center gap-3.5 px-3 py-2.5 text-[15px] font-w450 tracking-[-0.009em] rounded-xl transition-all ${
                  isActive
                    ? "bg-pure-white text-ink shadow-[0_2px_8px_rgba(23,25,28,0.03)] border border-dove/20"
                    : "text-graphite hover:text-ink hover:bg-white/40"
                }`}
              >
                <span className={isActive ? "text-ink" : "text-graphite"}>{item.icon}</span>
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Grouped section: Teams with color-dot indicators */}
        <div className="mt-8">
          <span className="px-3 text-[11px] font-w500 uppercase tracking-[0.5px] text-graphite">Teams</span>
          <div className="flex flex-col gap-1.5 mt-3">
            {[
              { name: "Marketing", dot: "bg-emerald-400" },
              { name: "Design Dev", dot: "bg-amber-400" },
              { name: "Exec Admin", dot: "bg-blue-400" }
            ].map((team) => (
              <div
                key={team.name}
                className="flex items-center justify-between px-3 py-1.5 text-caption text-ink font-w430 cursor-pointer hover:bg-white/40 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${team.dot}`} />
                  <span>{team.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grouped section: Favorites */}
        <div className="mt-8 flex-1">
          <span className="px-3 text-[11px] font-w500 uppercase tracking-[0.5px] text-graphite">Favorites</span>
          <div className="flex flex-col gap-1.5 mt-3">
            <div className="flex items-center gap-2 px-3 py-1.5 text-caption text-graphite hover:text-ink cursor-pointer font-w430">
              <StarIcon className="w-4 h-4 text-slate" />
              <span>YT Growth v2</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 text-caption text-graphite hover:text-ink cursor-pointer font-w430">
              <StarIcon className="w-4 h-4 text-slate" />
              <span>Retention Audit</span>
            </div>
          </div>
        </div>

        {/* Bottom User Avatar marker */}
        <div className="flex items-center gap-3 px-2 pt-4 border-t border-dove/20">
          <AvatarBadge initials="YT" colorClass="bg-[#d2f4ea]" />
          <div className="flex flex-col">
            <span className="text-[13px] text-ink font-w480 leading-tight">YouTube Channel</span>
            <span className="text-[11px] text-graphite">Creator Studio</span>
          </div>
        </div>
      </aside>

      {/* Main Workspace Frame */}
      <div className="flex-1 flex flex-col h-full bg-fog overflow-hidden">
        
        {/* Sticky Top Nav bar */}
        <header className="h-[64px] bg-pure-white border-b border-dove/20 flex-shrink-0 flex items-center justify-between px-8">
          <div className="flex items-center gap-2 text-caption">
            <span className="text-graphite cursor-pointer hover:text-ink">Console</span>
            <span className="text-dove">/</span>
            <span className="text-ink font-w450">{activeTab}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-graphite">
                <SearchIcon className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search studio..."
                className="w-[180px] md:w-[220px] bg-fog pl-9 pr-4 py-1.5 rounded-inputs border border-transparent focus:border-dove/50 outline-none text-caption text-ink placeholder-graphite"
              />
            </div>
            <AvatarBadge initials="AS" colorClass="bg-sky-wash" className="cursor-pointer" />
          </div>
        </header>

        {/* Content Area (Scrollable dashboard content) */}
        <main className="flex-1 overflow-y-auto p-8 flex flex-col lg:flex-row gap-8">
          
          {/* Left panel: main metrics, grid, statistics tables */}
          <div className="flex-1 flex flex-col gap-8 min-w-0">
            
            {/* Header + Time range filters */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-subheading lg:text-heading-sm font-signifier text-ink font-normal leading-none tracking-tight">
                  YT Channel Performance
                </h1>
                <p className="text-caption text-graphite font-w430 mt-1.5">
                  Analytics compiled for the active workspace
                </p>
              </div>

              {/* Time selection buttons */}
              <div className="flex bg-pure-white border border-dove/20 rounded-full p-1 self-start shadow-sm">
                {[
                  { id: "28d", label: "28 Days" },
                  { id: "90d", label: "90 Days" },
                  { id: "365d", label: "365 Days" }
                ].map((t) => {
                  const isActive = timeRange === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setTimeRange(t.id)}
                      className={`text-caption px-4 py-1 rounded-full font-w450 transition-all cursor-pointer ${
                        isActive ? "bg-ink text-pure-white" : "text-graphite hover:text-ink"
                      }`}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* KPI grid: 4 stat cards with deltas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Video Views", value: activeStats.views, delta: activeStats.viewsDelta, isPositive: activeStats.viewsIsPositive },
                { title: "Watch Time", value: activeStats.watchTime, delta: activeStats.watchTimeDelta, isPositive: activeStats.watchTimeIsPositive },
                { title: "Subscribers", value: activeStats.subscribers, delta: activeStats.subscribersDelta, isPositive: activeStats.subscribersIsPositive },
                { title: "Estimated Revenue", value: activeStats.revenue, delta: activeStats.revenueDelta, isPositive: activeStats.revenueIsPositive }
              ].map((kpi, idx) => (
                <div key={idx} className="bg-pure-white rounded-cards p-5 shadow-subtle hover:translate-y-[-2px] transition-transform duration-200">
                  <span className="text-[12px] text-graphite font-w430 tracking-tight block">
                    {kpi.title}
                  </span>
                  <div className="font-signifier text-[22px] lg:text-[26px] text-ink font-normal leading-tight mt-2.5">
                    {kpi.value}
                  </div>
                  <div className="mt-2.5 flex items-center gap-1.5">
                    <DeltaIndicator value={kpi.delta} isPositive={kpi.isPositive} />
                    <span className="text-[11px] text-graphite font-w430">vs prev</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Main graph card (Views timeline index) */}
            <div className="bg-pure-white rounded-cards p-6 shadow-subtle">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-[15px] text-ink font-w500 tracking-tight">Views Timeline Index</h3>
                  <span className="text-caption text-graphite font-w430">Daily traffic density over time</span>
                </div>
                <div className="flex items-center gap-1 text-[12px] text-graphite font-w430 bg-fog px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink" />
                  <span>Current Period</span>
                </div>
              </div>
              
              {/* Dynamic SVG chart drawing */}
              <div className="mt-2">
                <DynamicLineChart
                  data={activeStats.viewsChartData}
                  timeRange={timeRange}
                  strokeColor="#17191c"
                  gradientId="views"
                />
              </div>
            </div>

            {/* Grid for secondary widgets (Donut + Bars) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Warm Data Card: Apricot Wash, Rust donut */}
              <div className="bg-apricot-wash rounded-cards p-5 flex flex-col justify-between shadow-subtle">
                <div>
                  <h3 className="text-[15px] text-ink font-w500 tracking-tight">Audience Acquisition</h3>
                  <span className="text-[12px] text-rust opacity-80 font-w430">Warm traffic sources</span>
                </div>

                <div className="flex items-center justify-between gap-6 my-4">
                  <SVGDonutChart slices={activeStats.trafficSlices} size={100} />
                  
                  <div className="flex-1 flex flex-col gap-2 text-caption">
                    {activeStats.trafficSlices.map((slice, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2 font-w430">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: slice.color }} />
                          <span className="text-ink text-[13px]">{slice.name}</span>
                        </div>
                        <span className="font-w480 text-ink text-[13px]">{slice.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <span className="text-[11px] text-rust opacity-75 font-w430">
                  External widgets contribute the highest subscriber conversion
                </span>
              </div>

              {/* Cool Data Card: Sky Wash, blue bar chart */}
              <div className="bg-sky-wash rounded-cards p-5 flex flex-col justify-between shadow-subtle">
                <div>
                  <h3 className="text-[15px] text-ink font-w500 tracking-tight">Device Categories</h3>
                  <span className="text-[12px] text-[#4a90e2] font-w430">View distribution by device</span>
                </div>

                <div className="flex h-24 items-end justify-between px-2 gap-4 my-4">
                  {activeStats.deviceBars.map((bar, i) => (
                    <div key={i} className="flex flex-col items-center flex-1 gap-1.5">
                      <div className="text-[12px] text-ink font-w480">{bar.pct}%</div>
                      <div className={`w-full ${bar.color} rounded-t-[4px] transition-all duration-500`} style={{ height: `${bar.pct}%` }} />
                      <span className="text-[11px] text-graphite font-w430">{bar.label}</span>
                    </div>
                  ))}
                </div>

                <span className="text-[11px] text-[#4a90e2] opacity-75 font-w430">
                  Mobile views continue to surge in peak late-night intervals
                </span>
              </div>
            </div>

            {/* Bottom split: Region Stats Table & Top Performing Videos */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              
              {/* Region Stats: 2 columns in grid */}
              <div className="bg-pure-white rounded-cards p-6 shadow-subtle md:col-span-2">
                <h3 className="text-[15px] text-ink font-w500 tracking-tight mb-4">Top Regions</h3>
                <div className="flex flex-col gap-3.5">
                  {activeStats.regions.map((region, idx) => (
                    <div key={idx} className="flex justify-between items-center text-[14px]">
                      <span className="text-graphite font-w430">{region.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-ink font-w480">{region.count}</span>
                        <span className="text-[11px] text-graphite bg-fog px-1.5 py-0.5 rounded-sm font-w430">
                          {region.pct}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Performing Videos list: 3 columns in grid */}
              <div className="bg-pure-white rounded-cards p-6 shadow-subtle md:col-span-3">
                <h3 className="text-[15px] text-ink font-w500 tracking-tight mb-4">Top Performing Videos</h3>
                <div className="flex flex-col gap-4">
                  {activeStats.topVideos.map((video, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-4 text-caption">
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Mock thumbnail representation (rounded-images 12px) */}
                        <div className="w-10 h-7 rounded-[8px] bg-fog flex items-center justify-center text-[10px] text-graphite font-w450 flex-shrink-0 border border-dove/20">
                          {video.duration}
                        </div>
                        <span className="text-ink font-w450 truncate">{video.title}</span>
                      </div>
                      <div className="flex items-center gap-4 flex-shrink-0">
                        <span className="text-ink font-w480">{video.views}</span>
                        <span className="text-[12px] text-emerald-700 font-w430 bg-emerald-50 px-1.5 py-0.5 rounded-sm">
                          {video.retention}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right panel: AI Assistant widget & chat box */}
          <div className="w-full lg:w-[360px] flex flex-col bg-pure-white rounded-cards border border-dove/20 shadow-subtle p-6 h-[720px] lg:sticky lg:top-8 flex-shrink-0">
            
            {/* Header info */}
            <div className="flex items-center gap-3 pb-4 border-b border-dove/20">
              <div className="w-9 h-9 rounded-full bg-ink flex items-center justify-center text-pure-white">
                <SparklesIcon className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[15px] text-ink font-w500 leading-tight">Steep Assistant</h3>
                <span className="text-[11px] text-emerald-700 font-w430">AI Insights Active</span>
              </div>
            </div>

            {/* Conversation list */}
            <div className="flex-1 overflow-y-auto my-4 space-y-4 pr-1">
              {chatMessages.map((msg) => {
                const isAI = msg.sender === "assistant";
                return (
                  <div key={msg.id} className={`flex flex-col ${isAI ? "items-start" : "items-end"}`}>
                    <span className="text-[10px] text-graphite mb-1 font-w430 px-1">
                      {isAI ? "AI Assistant" : "You"}
                    </span>
                    
                    {/* Message body bubble */}
                    <div
                      className={`max-w-[90%] px-4 py-3 rounded-2xl text-[14px] leading-relaxed ${
                        isAI
                          ? "bg-fog text-ink border border-dove/20"
                          : "bg-ink text-pure-white"
                      }`}
                    >
                      {msg.text}
                    </div>

                    {/* Associated Custom Response Card */}
                    {isAI && msg.hasChart && (
                      <div className="mt-3 w-full bg-pure-white rounded-cards border border-dove/20 shadow-sm p-4 hover:border-dove/50 transition-colors">
                        {/* Sky Wash inner chart card */}
                        <div className="bg-sky-wash rounded-[16px] p-3 mb-3">
                          <span className="text-[11px] text-ink opacity-80 font-w450 block mb-2">
                            {msg.chartType === "subscribers" ? "Subscriber Velocity" : "Geographic Breakdown"}
                          </span>
                          
                          {/* Mini Line Chart in two colors (Rust for 'last month', blue for 'current') */}
                          <div className="h-[70px]">
                            <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                              {/* Rust line: last month */}
                              <path d="M 0 50 L 30 42 L 70 48 L 100 35 L 140 38 L 170 20 L 200 28" fill="none" stroke="#5d2a1a" strokeWidth="1.5" strokeLinecap="round" />
                              {/* Blue line: current month */}
                              <path d="M 0 45 L 30 35 L 70 30 L 100 20 L 140 18 L 170 5 L 200 8" fill="none" stroke="#4a90e2" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          </div>
                          
                          <div className="flex justify-between items-center text-[10px] text-graphite font-w430 mt-1 px-1">
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-rust" /> Prev period
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#4a90e2]" /> Current
                            </span>
                          </div>
                        </div>

                        <h4 className="text-[14px] text-ink font-w500 tracking-tight leading-tight">
                          {msg.title}
                        </h4>
                        <p className="text-[12px] text-ash mt-1.5 leading-normal">
                          Regional distribution reveals high engagement densities in core engineering sectors.
                        </p>
                        
                        <div className="mt-3 flex gap-3 text-[11px] font-w450">
                          <span className="text-[#4a90e2] hover:opacity-80 cursor-pointer">View Report</span>
                          <span className="text-graphite font-normal">|</span>
                          <span className="text-[#4a90e2] hover:opacity-80 cursor-pointer">Analyze Audience</span>
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex flex-col items-start">
                  <span className="text-[10px] text-graphite mb-1 font-w430 px-1">AI Assistant</span>
                  <div className="bg-fog text-ink border border-dove/20 px-4 py-3 rounded-2xl text-[14px] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-dove animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-dove animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-dove animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions Suggestions */}
            <div className="flex flex-wrap gap-2 mb-3">
              {[
                "Analyze subscriber sources",
                "Explain geographic distribution"
              ].map((queryText, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickQuery(queryText)}
                  className="text-[12px] text-graphite hover:text-ink bg-fog hover:bg-dove/20 px-2.5 py-1 rounded-full border border-dove/20 text-left transition-colors cursor-pointer"
                >
                  {queryText}
                </button>
              ))}
            </div>

            {/* Chat form input */}
            <form onSubmit={handleSendChat} className="relative mt-auto">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask AI about channel trends..."
                className="w-full bg-pure-white text-[14px] text-ink placeholder-graphite border border-dove/40 focus:border-dove/70 outline-none rounded-inputs pl-4 pr-12 py-3"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-ink text-pure-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
              >
                <SendIcon className="w-3.5 h-3.5 text-pure-white" />
              </button>
            </form>

          </div>

        </main>
      </div>

    </div>
  );
}

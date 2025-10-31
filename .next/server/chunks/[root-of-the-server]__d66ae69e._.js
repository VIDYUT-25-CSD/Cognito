module.exports = [
"[project]/Desktop/hack/ai-career-coach/.next-internal/server/app/api/inngest/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/Desktop/hack/ai-career-coach/lib/inngest/client.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inngest",
    ()=>inngest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack$2f$ai$2d$career$2d$coach$2f$node_modules$2f$inngest$2f$components$2f$Inngest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/hack/ai-career-coach/node_modules/inngest/components/Inngest.js [app-route] (ecmascript)");
;
const inngest = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack$2f$ai$2d$career$2d$coach$2f$node_modules$2f$inngest$2f$components$2f$Inngest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Inngest"]({
    id: "career-coach",
    name: "Career Coach",
    credentials: {
        gemini: {
            apiKey: process.env.GEMINI_API_KEY
        }
    }
});
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/Desktop/hack/ai-career-coach/lib/prisma.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const db = globalThis.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) {
    globalThis.prisma = db;
} // globalThis.prisma: This global variable ensures that the Prisma client instance is
 // reused across hot reloads during development. Without this, each time your application
 // reloads, a new instance of the Prisma client would be created, potentially leading
 // to connection issues.
}),
"[project]/Desktop/hack/ai-career-coach/lib/inngest/function.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateIndustryInsights",
    ()=>generateIndustryInsights
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack$2f$ai$2d$career$2d$coach$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/hack/ai-career-coach/lib/prisma.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack$2f$ai$2d$career$2d$coach$2f$lib$2f$inngest$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/hack/ai-career-coach/lib/inngest/client.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack$2f$ai$2d$career$2d$coach$2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/hack/ai-career-coach/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
;
;
;
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack$2f$ai$2d$career$2d$coach$2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
});
const generateIndustryInsights = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack$2f$ai$2d$career$2d$coach$2f$lib$2f$inngest$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inngest"].createFunction({
    name: "Generate Industry Insights"
}, {
    cron: "0 0 * * 0"
}, async ({ event, step })=>{
    const industries = await step.run("Fetch industries", async ()=>{
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack$2f$ai$2d$career$2d$coach$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].industryInsight.findMany({
            select: {
                industry: true
            }
        });
    });
    for (const { industry } of industries){
        const prompt = `
          Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
          {
            "salaryRanges": [
              { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
            ],
            "growthRate": number,
            "demandLevel": "High" | "Medium" | "Low",
            "topSkills": ["skill1", "skill2"],
            "marketOutlook": "Positive" | "Neutral" | "Negative",
            "keyTrends": ["trend1", "trend2"],
            "recommendedSkills": ["skill1", "skill2"]
          }
          
          IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
          Include at least 5 common roles for salary ranges.
          Growth rate should be a percentage.
          Include at least 5 skills and trends.
        `;
        const res = await step.ai.wrap("gemini", async (p)=>{
            return await model.generateContent(p);
        }, prompt);
        const text = res.response.candidates[0].content.parts[0].text || "";
        const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
        const insights = JSON.parse(cleanedText);
        await step.run(`Update ${industry} insights`, async ()=>{
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack$2f$ai$2d$career$2d$coach$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].industryInsight.update({
                where: {
                    industry
                },
                data: {
                    ...insights,
                    lastUpdated: new Date(),
                    nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                }
            });
        });
    }
});
}),
"[project]/Desktop/hack/ai-career-coach/app/api/inngest/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack$2f$ai$2d$career$2d$coach$2f$node_modules$2f$inngest$2f$next$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/hack/ai-career-coach/node_modules/inngest/next.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack$2f$ai$2d$career$2d$coach$2f$lib$2f$inngest$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/hack/ai-career-coach/lib/inngest/client.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack$2f$ai$2d$career$2d$coach$2f$lib$2f$inngest$2f$function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/hack/ai-career-coach/lib/inngest/function.js [app-route] (ecmascript)");
;
;
;
const { GET, POST, PUT } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack$2f$ai$2d$career$2d$coach$2f$node_modules$2f$inngest$2f$next$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serve"])({
    client: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack$2f$ai$2d$career$2d$coach$2f$lib$2f$inngest$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inngest"],
    functions: [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack$2f$ai$2d$career$2d$coach$2f$lib$2f$inngest$2f$function$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateIndustryInsights"]
    ]
});
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d66ae69e._.js.map
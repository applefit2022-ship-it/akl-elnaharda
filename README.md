# 🍲 إيه الأكل النهاردة؟ (What's for dinner today?)

تطبيق ويب بالعربي (RTL) بيحل حيرة الطبيخ: الست تقول أو تكتب خزين البيت، والتطبيق يصنفه ويفهرسه ويملا جدول أسبوعي بأكلات مصرية من نفس الخزين، ولما تضغط على أكلة تطلع المكونات والوصفة.

A single-page Arabic PWA: say or type your pantry, get a weekly Egyptian meal plan, tap a meal for ingredients and the recipe. No backend, no build step. Data stays in the browser (`localStorage`).

## المميزات
- إدخال الخزين بالصوت (`ar-EG`) أو بالكتابة، مع تصنيف وفهرسة تلقائية
- جدول أسبوعي تلقائي على حسب نوع وكمية الخزين (١٥ أكلة)
- وصفة بالمكونات (✔ موجود / ✖ ناقص) والطريقة
- تصوير الأكلة، بورتفوليو «أكلاتي»، مشاركة على السوشيال، وإرسال وصفة أو جدول لصاحبة
- PWA: بيتثبت على الموبايل وبيشتغل أوفلاين بعد أول فتح

## التشغيل محلياً
```bash
python3 -m http.server 8080   # أو: npm start
```
افتحي `http://localhost:8080`. الميكروفون والتثبيت محتاجين `https` أو `localhost`.

## النشر على GitHub Pages
من **Settings → Pages**: Source = **Deploy from a branch**، الفرع `main`، المجلد `/ (root)`.

## تثبيته على الموبايل
- **أندرويد (كروم):** القايمة ⋮ ← تثبيت التطبيق.
- **آيفون (سفاري):** المشاركة ← إضافة إلى الشاشة الرئيسية.

## تحويله لتطبيق أندرويد / آيفون (Capacitor)
```bash
npm install
npm run cap:add:android      # أو cap:add:ios (محتاج macOS و Xcode)
npm run cap:sync
npx cap open android         # يفتح Android Studio لبناء APK/AAB
```
غيّري `appId` في `capacitor.config.json` لمعرّف يخصك قبل النشر على المتاجر.

## هيكل الملفات
```
index.html              التطبيق كله (HTML + CSS + JS)
manifest.webmanifest    إعدادات التثبيت
sw.js                   Service Worker للعمل أوفلاين
icons/                  أيقونات 192 و512
package.json, capacitor.config.json   تغليف الموبايل (اختياري)
```

## للتعديل
- الأكلات في مصفوفة `R`، والأصناف المفهومة في `ING` داخل `index.html`.
- لإضافة أكلة: `['الاسم','إيموجي','لون الخلفية','مكوّن1,مكوّن2','خطوة١|خطوة٢|خطوة٣']`، والمكونات لازم تطابق أسماء `ING`.
- لو عدّلتي ملفات الموقع، غيّري `C='akl-v1'` في `sw.js` عشان الأجهزة تاخد النسخة الجديدة.

## حدود معروفة
- الحفظ محلي على كل جهاز ومش بيتزامن.
- الجدول بقواعد جاهزة، مش ذكاء اصطناعي.
- التعرف على الصوت بيعتمد على المتصفح (كروم وسفاري)، وفيه خانة كتابة بديلة.

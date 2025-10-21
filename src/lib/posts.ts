// --- Type Definitions ---
export type Language = 'en' | 'he';

export interface PostContent {
  title: string;
  excerpt: string;
  fullContent: string;
}

export interface Post {
  slug: string;
  date: string;
  author: string;
  readTime: string;
  content: {
    en?: PostContent;
    he?: PostContent;
  };
}

export interface PostSectionHeader {
  title: string;
  subtitle: string;
}

export const postSectionHeader: PostSectionHeader = {
  title: "From the Playbook",
  subtitle: "Breaking down the X's and O's of software development, team strategy, and high-performance engineering. Oh and Basketball!"
};

export const flexibleBlogPosts: Post[] = [
  {
    slug: "the-maryland-chameleon",
    date: "Oct 20, 2025",
    readTime: "15 min read",
    author: "Moshe Gotam",
    content: {
      he: {
        title: "הזיקית ממרילנד",
        excerpt: "הדינמיקה בקבוצת ספורט בוחנת את אופי השחקן. האם נולדת להוביל, להיות ה'באטמן' של הקבוצה? או שאתה 'רובין', השותף האולטימטיבי שמאפשר לכוכב לזהור? או בכלל משהו היברידי באמצע",
        fullContent: `<p class="mb-4">הדינמיקה בקבוצת ספורט בוחנת את אופי השחקן. האם נולדת להוביל, להיות ה"באטמן" של הקבוצה? או שאתה "רובין", השותף האולטימטיבי שמאפשר לכוכב לזהור? אבל אולי השאלה צריכה להיות אחרת: האם נדרש גם שחקן מסוג אחר, כזה שיכול לבחור את הדמות בהתאם לסיטואציה, שחקן שהוא גם באטמן כשצריך לקחת אחריות, וגם רובין כשהקבוצה דורשת ממנו להיות משלים.</p>
<p class="mb-4">השאלה הזו מכוונת ישירות לג'ף דאוטין. אז מי אתה באמת? מוביל, משלים, או הזיקית שיודעת להיות שניהם?</p>
<figure class="my-8">
  <div class="h-130 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden">
    <img
      class="w-full h-full object-cover rounded-lg border-gray-700 border-4"
      src="/blog-post/the-maryland-chameleon/robin_batman.png"
      alt="Batman and Robin standing together" />
  </div>
  <figcaption class="text-center text-sm text-gray-400 mt-2">באטמן ורובין: הדינמיקה שמגדירה קריירות</figcaption>
</figure>
<p class="mb-4">כדי לענות על זה, חייבים לחזור להתחלה. המסע של דאוטין הוא סיפור על הסתגלות, והוא זה שמגדיר אותו.</p>
<h3 class="text-white text-2xl font-bold mt-8 mb-4">הרבע הראשון - או ילדות</h3>
<p class="mb-4">ג'ף דאוטין הבן, יליד 1997, נולד באפר מארלבורו, מרילנד. הוא נולד באזור ה-DMV, סביבה הידועה בתחרותיות קיצונית ובייצור בלתי פוסק של כישרונות NBA, המחייבת שחקנים צעירים להגדיר את עצמם מגיל מוקדם. כדי להבין עד כמה האיזור הזה הוא איזור של כדורסל ניתן רק לבחון רשימה קצרה של שחקנים שיצאו ממנו בשנים האחרונות - קווין דוראנט, כרמלו אנתוני, ויקטור אולדיפו, אנג'ל ריס, רודי גיי ועוד.</p>
<p class="mb-4">בנוסף לילדות באיזור בו הכדורסל ברמה גבוהה כל כך, דאוטין גם לא הלך לתיכון ציבורי רגיל, אלא ל-St. John's College High School, שמשחקת ב-WCAC – ליגת התיכונים הקתולית, הלידה שנחשבת לאחת מהקשות ביותר בארצות הברית. זו ליגה שבה כל ערב עלול לפגוש שחקן NBA בפוטנציה. כשדאוטין שיחק, ה"באטמן" הבלתי מעורער של הליגה היה מפלצת אתלטית בשם מרקל פולץ' מדימאת'ה - הבחירה מספר 1 בדראפט 2017.</p>
<p class="mb-4">אבל כאן מגיעה הנקודה הנוקבת, הרגע המכונן שבו ה"זיקית" החלה להתפתח. דאוטין אפילו לא היה ה"באטמן" בקבוצה שלו. הוא חלק את הקו האחורי עם אנתוני קוואן ג'וניור, הכוכב המקומי הכריזמטי שסומן כ"באטמן".</p>
<p class="mb-4">במקום להיכנע לתבנית הדו-קוטבית של "באטמן או רובין", דאוטין נאלץ לפתח סט כישורים שלישי, מורכב בהרבה: הסתגלות אקטיבית. הוא לא היה "רובין" פסיבי שחי בצילו של הכוכב; הוא היה עשה הכל כדי להשיג את המטרה – ניצחון.</p>
<p class="mb-4">מול קוואן הדומיננטי, הוא שינה את משחקו: הוא הפך לשומר הקשוח, לשחקן השקול, לדבק שמחבר את הקבוצה. זו לא הייתה קבלה של תפקיד מספר 2, אלא הבנה עמוקה של הסיטואציה ובחירה אסטרטגית במה שהקבוצה צריכה. יחד, כשהוא מתאים את עצמו, הם הובילו את התיכון ב-2016 לתואר (ראשון מאז 2000).</p>
<p class="mb-4">הוא סיים את השנה האחרונה עם ממוצע של 15 נק', 5 אס', דירוג של 3 כוכבים וחוזה ברוד איילנד – נתונים שאינם של "באטמן" טהור או "רובין" קלאסי, אלא של שחקן שכבר אז הבין איך להיות מה שהקבוצה צריכה כדי לנצח.</p>
<h3 class="text-white text-2xl font-bold mt-8 mb-4">הרבע השני - או הקולג'</h3>
<p class="mb-4">כש"הרבע הראשון" הסתיים, ג'ף דאוטין סיים את התיכון לאחר שהפגין יכולת להיות האופציה השנייה, יכולת זו הייתה רק "צבע" אחד. כעת, הוא היה צריך לבחור מכללה.</p>
<p class="mb-4">הבחירה שלו הגדירה את כל הנרטיב: לאחרת קבלת דירוג 3 כוכבים הוא לא הלך למכללה גדולה כמו מרילנד, הוא הגיע אל אוניברסיטת רוד איילנד (URI) – כאשר אתה לא מגיע בדלת הראשית אתה נדרש להתאים את עצמך לסיטואציה.</p>
<p class="mb-4">כהרגלו, ההתאקלמות הייתה תהליך. בעונתו השנייה (2017-18), הוא כבר ביסס את עצמו כמנוע של הקבוצה: הוא קפץ לכמעט 10 נקודות ו-5.6 אסיסטים למשחק. הם הגיעו לטורניר ה-NCAA, שם הדהימו את אוקלהומה של טריי יאנג. גם בהפסד בסיבוב השני לדיוק הגדולה, דאוטין הראה את ה-IQ שלו כמנהל משחק, כשסיים עם 9 אסיסטים.</p>
<p class="mb-4">אז הגיע הוואקום. בקיץ 2018, הקבוצה התפרקה. הסקוררים המובילים סיימו את לימודיהם והמאמן עזב. זו הייתה שנת המבחן האולטימטיבית של להוכיח את היכולות להתאים אל הסיטואציה. הקבוצה איבדה את כוח האש המרכזי שלה, ודאוטין נאלץ לשנות את צבעו באופן דרסטי.</p>
<p class="mb-4">המהפך היה מיידי וקיצוני. בעונתו השלישית, ממוצע הנקודות שלו זינק בכ-60% ל-15.3 למשחק. הנתון המעניין הוא דווקא ירידת האסיסטים (ל-3.7). זו לא הייתה "בחירה" להפוך ל"באטמן", אלא התאמה כפויה למציאות חדשה. הקבוצה הייתה צריכה נקודות כדי לשרוד, ודאוטין – ביצע את ההתאמות והפך לסקורר כי זה מה שהמצב דרש ממנו.</p>
<p class="mb-4">אז הגיע הוואקום. בקיץ 2018, הקבוצה התפרקה. הסקוררים המובילים סיימו את לימודיהם והמאמן עזב. זו הייתה שנת המבחן האולטימטיבית של להוכיח את היכולות להתאים אל הסיטואציה. הקבוצה איבדה את כוח האש המרכזי שלה, ודאוטין נאלץ לשנות את צבעו באופן דרסטי.</p>
<p class="mb-4">בשנתו הרביעית והאחרונה, כשהסגל התייצב, דאוטין הוכיח שוב את יכולת ההסתגלות שלו וחזר להתמקד בניהול משחק בוגר. הוא נבחר לחמישייה השלישית בליגה, אבל הנתון המדהים באמת היה יחס האסיסטים-איבודים שלו: 2.82 ל-1, דירוג 15# בכל ארה"ב.</p>
<p class="mb-4">הנתון הזה לא היה מקרי. הוא היה הוכחה לאינטליגנציה יוצאת דופן – אותה אינטליגנציה שבאה לידי ביטוי גם מחוץ למגרש עם ממוצע 3.52 וזכייה בפרס <strong>"אלברט לבוף"</strong> לספורטאי-סטודנט המצטיין ב-2020, שלוש שנים לאחר חסן מרטין מחולון.</p>
<p class="mb-4">דאוטין סיים את המכללות מבלי שניתן היה להגדיר אותו בתבנית אחת. הוא הוכיח שהוא שחקן בעל הבנת משחק עמוקה, המאפשרת לו לזהות חולשות אצל היריב ולהתאים את תפקודו לדרישות הקבוצה. ערכו לא נמדד בתפקיד קבוע, אלא ביכולת ההסתגלות הטקטית הגבוהה שלו מרגע לרגע.</p>
<h3 class="text-white text-2xl font-bold mt-8 mb-4">מחצית - או ליל הדראפט</h3>
<p class="mb-4">"הרבע השני" הסתיים כשדאוטין סיים קריירת מכללות מרשימה, זוכה פרסים אקדמיים ומוכן לנסות את מזלו ב-NBA. ואז הגיעה שריקת המחצית – ליל הדראפט של 2020. 60 שמות הוקראו, ושמו של ג'ף דאוטין לא היה ביניהם. הוא היה "Undrafted"</p>
<p class="mb-4">כאן דאוטין נתקל במציאות המקצועית הקשוחה של ה-NBA. זו לא הייתה שאלה של "באטמן" או "רובין"; זו הייתה שאלה של התאמה. 30 קבוצות ויתרו עליו, והשאלה המתבקשת היא מדוע.</p>
<p class="mb-4">האם ה"זיקית" הוורסטילית נתפסה כמי שחסרה "כלי נשק" אבסולוטי אחד? האם האתלטיות שלו לא הרשימה? האם הקליעה מבחוץ לא הייתה מספיק עקבית כדי לתרגם לליגה של הגדולים? סקאוטים רבים תייגו אותו כנראה כשחקן אשר חכם וטוב מדי לליגות המשנה, אבל לא מספיק מיוחד (Specialist) עבור ה-NBA.</p>
<p class="mb-4">המצב הסתבך עקב מגפת הקורונה, שביטלה את ליגת הקיץ של 2020 ולקחה מדאוטין את ההזדמנות המיידית להוכיח לסקאוטים שהם טעו. בהזדמנות היחידה שקיבל – חוזה "Exhibit 10" (חוזה מחנה אימונים לא מובטח) עם אורלנדו מג'יק – הוא נופה מיד. החוזה המקצועי האמיתי הראשון שלו לא היה בליגה של הגדולים, אלא כרטיס בכיוון אחד ישירות לליגת הפיתוח. המשחק השתנה לגמרי.</p>
<figure class="my-8">
  <div class="h-130 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden">
    <img
      class="w-full h-full object-cover rounded-lg border-gray-700 border-4"
      src="/blog-post/the-maryland-chameleon/dowtin_undrafted.png"
      alt="Dowtin and Undrafted standing together" />
  </div>
  <figcaption class="text-center text-sm text-gray-400 mt-2">דאוטין בליל הדראפט</figcaption>
</figure>
<h3 class="text-white text-2xl font-bold mt-8 mb-4">הרבע השלישי - או ה-NBA</h3>
<p class="mb-4">עבור רוב השחקנים חוזה בליגת הפיתוח, זוהי תחנה אחרונה לפני הנפילה לאירופה או לשכחה. עבור דאוטין, זו הפכה להיות המעבדה הפרטית שלו ל"פיצול אישיות מקצועי".</p>
<p class="mb-4">במשך ארבע שנים (2020-2024), דאוטין חי חיים כפולים:</p>
<p class="mb-4">1. ה"באטמן" של ה-G League: כשהוא לבש את המדים של לייקלנד מג'יק, דלאוור בלו קואוטס או ראפטורס 905, דאוטין חזר להיות "האיש". הוא היה הרכז הפותח, הסקורר המוביל, והמוח על המגרש. הוא נתן באופן קבוע משחקים של 20+ נקודות ו-6+ אסיסטים, הוכיח לילה אחר לילה שהוא טוב מדי עבור הליגה הזו.</p>
<p class="mb-4">2. ה"רובין" של ה-NBA: ההצטיינות הזו ב-G League לא זיכתה אותו בחוזה NBA מובטח, אלא בסדרה אינסופית של חוזים ל-10 ימים וחוזים דו-כיווניים. ב-NBA, רוב הזמן הוא נדרש לחזור לזהות ה"רובין" המוכרת שלו: להיות "מבוגר אחראי", לא לטעות ולשמור חזק.</p>
<p class="mb-4">אבל מדי פעם, כשההזדמנות נקרתה בדרכו, ה"באטמן" של ה-G League הגיח לפני השטח.</p>
<p class="mb-4">דוגמאות בולטת מתפרסות לאורך השנים בטורונטו. לקראת סוף עונת 2022-23, במשחק קריטי עבור הראפטורס במירוץ לפליי-אין, דאוטין קיבל את המפתחות וסיפק את משחק חייו ב-NBA: שיא קריירה של 22 נקודות, 7 אסיסטים ו-3 חטיפות בניצחון על מילווקי. באורלנדו קלע סל ניצחון נגד בוסטון במשחק קדם עונה.</p>
<p class="mb-4">במשך ארבע שנים הוא היה כלוא ב"לופ" הזה: שחקן-על ברמה אחת, שחקן משלים יעיל ברמה שמעל, שלעיתים רחוקות מקבל הזדמנות להראות שהוא יכול להיות יותר. ה"רבע השלישי" הסתיים כשהוא הבין שכדי לאחד מחדש את שתי הזהויות, הוא חייב לשנות אווירה.</p>
<h3 class="text-white text-2xl font-bold mt-8 mb-4">הרבע הרביעי - או אירופה</h3>
<p class="mb-4">"הרבע השלישי" הסתיים כשהוא הבין שהוא תקוע. בגיל 28, ג'ף דאוטין כבר לא היה "פרוספקט". הוא הוכיח שהוא "באטמן" ב-G League, אבל ה-NBA תייג אותו סופית כ"רובין" אולטימטיבי, ה-"Backdoor Guy" המושלם לסוף הספסל. כדי לאחד את שתי הזהויות, הוא היה חייב לעזוב את המערכת האמריקאית.</p>
<p class="mb-4">ההחתמה שלו היא הימור מחושב של עודד קטש, כפי שהסביר המאמן בעצמו: "ג'ף שחקן עם פוטנציאל גדול. מדובר באתלט שיודע לייצר מצבי קליעה לו ולאחרים, ובעל אינטליגנציית משחק שתעזור לו להשתלב בכדורסל האירופאי".</p>
<p class="mb-4">הניתוח של קטש הוא הגדרת המילון למה שמכבי צריכה. בקו אחורי צפוף שכולל סקורר-על בדמותו של לוני ווקר הרביעי, מוסר טהור - תמיר בלאט, וג'ימי קלארק שמשמש כ"פועל שחור" הגנתי – התפקיד של דאוטין הוא להיות לעשות הכל מהכל:</p>
<p class="mb-4"><strong>"לייצר מצבי קליעה... לאחרים":</strong> כשהוא על המגרש ליד לוני ווקר, דאוטין לוקח כביכול צעד אחורה. הוא יהפוך ל-"Backdoor Guy", ירווח את המשחק, ישמור על הגארד הקטלני של היריבה ויוביל את הכדור כדי לבצע את המסירה הנכונה.</p>
<p class="mb-4"><strong>"לייצר מצבי קליעה לו"</strong>: כשווקר על הספסל ודאוטין משחק ליד בלאט, הציפייה מתהפכת. הוא חייב להפעיל את "Big Game Dowtin", להפוך לסקורר, לתקוף את הסל וליצור נקודות כדי להוביל את היחידה השנייה.</p>
<p class="mb-4">כבר ב2 מקרים בשבועיים האחרונים הוא נכנס ל"זון" מטורף - ברבע הרביעי של 11 נק רצופות מול אולי' ו9 מול הפועל, במקרה אחד זה הספיק לניצחון ובשני לא. "הרבע הרביעי" בקריירה של דאוטין הוא המבחן האולטימטיבי. אחרי קריירה שלמה של פיצול אישיות כפוי בין שתי ליגות (NBA ו-G League), מכבי תל אביב דורשת ממנו, בפעם הראשונה, להיות הזיקית גם "באטמן" וגם "רובין" באותו ערב. זו כבר לא הישרדות; זו דרישה למצוינות. והתשובה לשאלה הזו יכולה להיות הכי חשובה לעונת היורוליג של מכבי.</p>
<figure class="my-8">
  <div class="h-130 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden">
    <img
      class="w-full h-full object-cover rounded-lg border-gray-700 border-4"
      src="/blog-post/the-maryland-chameleon/simpsons_career.png"
      alt="Dowtin Career" />
  </div>
  <figcaption class="text-center text-sm text-gray-400 mt-2">דאוטין במהלך האחרון (?)</figcaption>
</figure>

<h3 class="text-white text-2xl font-bold mt-8 mb-4">זריקה על הבאזר</h3>
<p class="mb-4">ארבעת הרבעים של הקריירה האמריקאית של דאוטין הסתיימו. המעבר למכבי תל אביב הוא לא עוד "רבע" – הוא יכול להיות זריקת הניצחון על הבאזר.</p>
<p class="mb-4">כל הדיון התיאורטי על "זיקית", "באטמן" ו"רובין" מתנקז כעת למבחן תוצאה אחד: האם הגמישות שהפגין היא נשק התקפי מנצח, או שהיא הייתה בסך הכל מנגנון הישרדות של שחקן משלים?</p>
<p class="mb-4">משחק אחד הסתיים בנצחון ומשחק אחר הסתיים בהפסד, העונה הזו היא השורה התחתונה. היא תקבע אם ה"זיקית" היא אכן האבולוציה של שחקן מודרני, או שזהו פשוט כינוי מנומס לשחקן שלא היה מספיק דומיננטי כדי להיות כוכב, ולא מספיק יציב כדי להיות שחקן משלים בכיר. הכדור בדרך לסל; האוהדים בתקווה יחכו בהיכל, עוצרים את נשימתם. </p>
`
      }
    }
  },
  {
    slug: "what-is-docker",
    date: "Oct 21, 2025",
    readTime: "7 min read",
    author: "Moshe Gotam",
    content: {
      en: {
        title: "What is Docker? Understanding the Container Revolution",
        excerpt: "Have you ever wished you could package your entire application, along with its environment, dependencies, and configuration, into a single, portable unit that runs exactly the same way everywhere? That's what Docker does.",
        fullContent: `
                <h2 class="text-white text-2xl font-bold mt-8 mb-4">Introduction</h2>
                <p class="mb-4">Have you ever wished you could package your entire application, along with its environment, dependencies, and configuration, into a single, portable unit that runs exactly the same way everywhere? That's exactly what Docker does. As someone who's deployed hundreds of applications across different environments, I can tell you that Docker has fundamentally changed how we develop and deploy software.</p>
                <h2 class="text-white text-2xl font-bold mt-8 mb-4">Understanding Docker and Containerization</h2>
                <p class="mb-4">Docker is an open-source platform that automates the deployment of applications inside lightweight, portable containers. Think of a container as a standardized box that can hold everything your application needs to run – code, runtime, system tools, libraries, and settings.</p>
                <h3 class="text-white text-xl font-bold mt-6 mb-4">Containerization vs. Virtualization: Understanding the Difference</h3>
                <p class="mb-4">Let's break down the key differences with a practical example:</p>
                <p class="mb-4"><strong>Traditional Virtualization (Virtual Machines):</strong></p>
                <pre class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto"><code class="language-text">Hardware Infrastructure
└── Host Operating System
    ├── Hypervisor
    │   ├── VM 1 (Full OS + Libraries + App 1)
    │   ├── VM 2 (Full OS + Libraries + App 2)
    │   └── VM 3 (Full OS + Libraries + App 3)
</code></pre>
                <p class="mb-4"><strong>Docker Containerization:</strong></p>
                <pre class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto"><code class="language-text">Hardware Infrastructure
└── Host Operating System
    ├── Docker Engine
    │   ├── Container 1 (Libraries + App 1)
    │   ├── Container 2 (Libraries + App 2)
    │   └── Container 3 (Libraries + App 3)
</code></pre>
                <blockquote class="border-l-4 border-orange-500 pl-4 italic my-4"><p>💡 Pro Tip: While VMs typically take minutes to start, Docker containers can start in seconds because they don't need to boot an entire OS.</p></blockquote>
                <h2 class="text-white text-2xl font-bold mt-8 mb-4">Key Benefits of Using Docker for Development</h2>
                <h3 class="text-white text-xl font-bold mt-6 mb-4">1. Consistency Across Environments</h3>
                <pre class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto"><code class="language-yaml"># docker-compose.yml example
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
  database:
    image: postgres:13
</code></pre>
                <h3 class="text-white text-xl font-bold mt-6 mb-4">2. Rapid Development Cycle</h3>
                <pre class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto"><code class="language-bash"># Quick Start
docker-compose up

# Easy Cleanup
docker-compose down --volumes
</code></pre>
                <h3 class="text-white text-xl font-bold mt-6 mb-4">3. Simplified Dependency Management</h3>
                <pre class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto"><code class="language-dockerfile">FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
</code></pre>
                <h2 class="text-white text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                <p class="mb-4">Docker has revolutionized development by solving the age-old problem of "it works on my machine." Its containerization approach offers a perfect balance between isolation and resource efficiency, making it an invaluable tool for modern development workflows.</p>
            `
      }
    }
  }
];

// --- Helper Function ---
export const getPostBySlug = (slug: string): Post | undefined => {
  return flexibleBlogPosts.find(post => post.slug === slug);
};

export const getPostContent = (post: Post, lang: Language): { content: PostContent, language: Language, isPreferred: boolean } => {
  const preferredContent = post.content[lang];
  if (preferredContent) {
    return { content: preferredContent, language: lang, isPreferred: true };
  }

  const fallbackLang = lang === 'en' ? 'he' : 'en';
  const fallbackContent = post.content[fallbackLang];

  if (fallbackContent) {
    return { content: fallbackContent, language: fallbackLang, isPreferred: false };
  }

  return {
    content: {
      title: "Content not available",
      excerpt: "This post is not available in the selected language.",
      fullContent: "<p>Content not available in the selected language.</p>"
    },
    language: lang,
    isPreferred: false
  };
};
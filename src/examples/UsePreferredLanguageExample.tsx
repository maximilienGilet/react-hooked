import usePreferredLanguage from "@/hooks/usePreferredLanguage";

export default function UsePreferredLanguageExample() {
  const language = usePreferredLanguage();

  return (
    <section>
      <div className="text-ctp-text">
        <p>
          Updates when you{" "}
          <a href="chrome://settings/languages">
            change your preferred language, too.
          </a>
        </p>
        <p>Language: {language}</p>
      </div>
    </section>
  );
}

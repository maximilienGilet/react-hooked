import usePreferredLanguage from "../hooks/usePreferredLanguage";

export default function App() {
  const language = usePreferredLanguage();

  return (
    <section>
      <div className="text-ctp-text">
        <p>Language: {language}</p>
      </div>
    </section>
  );
}

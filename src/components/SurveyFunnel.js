"use client"

import { useMemo, useState } from "react"
import { routeSurvey, surveyQuestions } from "../lib/survey"

export default function SurveyFunnel() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const current = surveyQuestions[step]
  const answeredCount = Object.keys(answers).length
  const complete = answeredCount === surveyQuestions.length
  const result = useMemo(() => (complete ? routeSurvey(answers) : null), [answers, complete])
  const progress = Math.round((answeredCount / surveyQuestions.length) * 100)

  function answerQuestion(value) {
    const nextAnswers = { ...answers, [current.id]: value }
    setAnswers(nextAnswers)
    if (step < surveyQuestions.length - 1) {
      setStep(step + 1)
    }
  }

  return (
    <section id="survey" className="section survey-section" aria-labelledby="survey-title">
      <div className="section-head">
        <p className="kicker">Interactive route</p>
        <h2 id="survey-title">Tell Pauli where the pressure is.</h2>
        <p>
          Five taps. No storage. The answer stays in this browser session and
          points you to the offer that fits.
        </p>
      </div>

      <div className="survey-shell">
        <div className="progress-label">
          <span>Question {step + 1} of {surveyQuestions.length}</span>
          <span>{progress}%</span>
        </div>
        <div className="progress-track" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>

        <fieldset>
          <legend>{current.label}</legend>
          <div className="option-grid">
            {current.options.map((option) => (
              <button
                className={answers[current.id] === option.value ? "option selected" : "option"}
                key={option.value}
                type="button"
                onClick={() => answerQuestion(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="survey-footer">
          <button
            className="text-button"
            type="button"
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
          >
            Back
          </button>
          <button
            className="text-button"
            type="button"
            onClick={() => {
              setAnswers({})
              setStep(0)
            }}
          >
            Reset
          </button>
        </div>

        <aside className="result-panel" aria-live="polite">
          {result ? (
            <>
              <p className="kicker">{result.eyebrow}</p>
              <h3>{result.title}</h3>
              <p>{result.text}</p>
              <a className="button primary small" href="mailto:hello@thepaulieffect.com">
                {result.cta}
              </a>
            </>
          ) : (
            <>
              <p className="kicker">Route pending</p>
              <h3>Pauli is listening for the pattern.</h3>
              <p>Answer the remaining questions and the panel will switch.</p>
            </>
          )}
        </aside>
      </div>
    </section>
  )
}

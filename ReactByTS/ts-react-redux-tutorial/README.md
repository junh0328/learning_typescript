# ππΌ redux-thunk νμμ€ν¬λ¦½νΈμ μ μ©νκΈ° ππΌ 

## ππΌ 0. index.tsx μ thunk λ―Έλ€μ¨μ΄ μ€μΉ λ° μ°λνκΈ° (νμ΄μ§λ€μ΄μ νκΈ°)

<p>src/index.js</p>

## ππΌ 1. API λΆλ¬μ€κΈ°

<p>src/api/github.ts</p>

## ππΌ 2. λ¦¬λμ€ λͺ¨λ λ§λ€κΈ°

### π― 2.1 μ‘μ μ μνκΈ°

<p>src/modules/github/actions.ts</p>

### π― 2.2 thunk ν¨μ μμ±νκΈ°

<p>modules/github/thunks.ts</p>

### π― 2.3 λ¦¬λμ μμ±νκΈ°

<p>src/modules/github/types.ts</p>
<p>src/modules/github/reducer.ts</p>

### π― 2.4 root reducerμ λ±λ‘νκΈ°

<p>src/modules/github/index.ts</p>
<p>src/modules/index.ts</p>

## ππΌ 3. νλ μ  νμ΄μλ μ»΄ν¬λνΈ (UI) μ€λΉνκΈ°

<p>src/components/GithubUsernameForm.tsx</p>
<p>src/components/GithubProfileInfo.tsx</p>

## ππΌ 4. μ»¨νμ΄λ μ»΄ν¬λνΈ λ§λ€κΈ°

<p>src/containers/GithubProfileLoader.tsx</p>

## ππΌ 5. App.tsxμ μ°λνμ¬ νμΈνκΈ°

<p>src/App.tsx</p>
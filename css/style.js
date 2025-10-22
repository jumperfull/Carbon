:root {
  --bg: #0a0f0c;
  --panel: #05110a;
  --muted: #8ba497;
  --accent: #1db57c;
  --accent-2: #149962;
  --card: #072116;
  --glass: rgba(255,255,255,0.02);
  --radius: 12px;
  --text: #e9f7ee;
  --container: 1100px;
}
body {
  background: linear-gradient(180deg, var(--bg) 0%, #041009 100%);
  color: var(--text);
}
.brand-icon { color: var(--accent); }
.btn-primary {
  background: linear-gradient(180deg, var(--accent), var(--accent-2));
  color: #021009;
  box-shadow: 0 6px 20px rgba(29,181,124,0.14);
}
.nav-link:hover { background: var(--glass); color: var(--text); }
.card {
  background: var(--card);
  border:1px solid rgba(255,255,255,0.02);
  box-shadow: 0 8px 20px rgba(2,6,12,0.6);
}

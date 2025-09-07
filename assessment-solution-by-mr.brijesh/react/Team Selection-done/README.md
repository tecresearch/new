# React: Team Selection

Build a small React component for a sports analytics dashboard that helps a coach pick a match squad. The UI shows all available players with their role and skills, and lets the coach sort and move players into a selected list.

Your users should be able to:
- See two tables: Available Players and Selected Players.
- In the Available Players table, view columns in this order: Name, Role, Bat (BattingSkill), Bowl (BowlingSkill), Action.
- For each row in Available Players, click the move icon to:
  - Disable that row’s move icon button.
  - Move the player to the Selected Players table.
- In the Selected Players table, view each player’s Name, Role, Bat (BattingSkill), and Bowl (BowlingSkill), with a delete icon.
- Clicking the delete icon should:
  - Remove the player from Selected Players.
  - Re-enable the move icon for that player in Available Players.

## Implementation Details

- Import playersList and render all players in Available Players by default.
- Sorting rules for Available Players:
  - Clicking Name → sort by player name (ascending).
  - Clicking Role → sort by role (ascending).
  - Clicking Bat → sort by batting skill (ascending).
  - Clicking Bowl → sort by bowling skill (ascending).
- Sorting applies only to Available Players. Selected Players do not need sorting.
- Sorting is always ascending. Clicking the same header again re-applies ascending sort (no descending option).
- The state must be updated immediately in both tables whenever a player is selected, removed, or sorting is applied.


## Required Data Test IDs
Tests rely on strict data-testid values. Do not change their format, spelling, case, or placement.

**Available Players table:**

- For every player row:
```html
<tr data-testid="available-<First>-<Last>-row">
```
- For each cell inside that row:
```html 
Name cell: <td data-testid="available-<First>-<Last>-name">
Role cell: <td data-testid="available-<First>-<Last>-role">
Bat cell: <td data-testid="available-<First>-<Last>-bat">
Bowl cell: <td data-testid="available-<First>-<Last>-bowl">
```
- For the Select action button:
```html   
<button data-testid="available-<First>-<Last>-select">Select</button>
```

**Example for Ross Taylor:**
```html 
<tr data-testid="available-Ross-Taylor-row">
  <td data-testid="available-Ross-Taylor-name">Ross Taylor</td>
  <td data-testid="available-Ross-Taylor-role">Batsman</td>
  <td data-testid="available-Ross-Taylor-bat">90</td>
  <td data-testid="available-Ross-Taylor-bowl">90</td>
  <td>
    <button data-testid="available-Ross-Taylor-select">Select</button>
  </td>
</tr>
```

**Selected Players table:**

- For every player row:
```html 
<tr data-testid="selected-<First>-<Last>-row">
```
- For the Remove action button:
```html 
<button data-testid="selected-<First>-<Last>-remove">Remove</button>
```

**Example:**
```html 
<tr data-testid="selected-Ross-Taylor-row">
  <td>Rohit Sharma</td>
  <td>Batsman</td>
  <td><button data-testid="selected-Ross-Taylor-remove">Remove</button></td>
</tr>
```

## Commands

- Run:

```bash
npm start
```

- Install:

```bash
npm install
```

- Test:

```bash
npm test
```

## Read-Only Files

- `src/App.js`
- `src/App.test.js`
- `src/players.json`
- `src/components/Header.jsx`
- `src/index.css`
- `src/index.js`
- `src/registerServiceWorker.js`

## Environment

- React Version: 18.2.0
- Node Version: 22(LTS)
- Default Port: 8000

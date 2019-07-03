# Testing UI Kata

## Steps

### 1 : Increment

When the increment button is clicked the counter increases by 1.

### 2 : Decrement

Add a Decrement Button whcih decreases the counter by 1.

### 3 : Add Limits

Counter must not go below 0 or above 10. ( 0 &le; counter &le; 10)

### 4: Change by 3

Add buttons to increment and decrement by 3

### 5: A Misunderstanding

Step 4 is deliberatly vague, and designed to intoduce a mistake.

At some point the action will take the counter beyond the limits (0-10).
Either the counter get set to the limit _or_ the action is not applied

#### 5.1: Go to limits

If the action would take the counter beyond a limit then set the counter to that limit.

#### 5.2: Don't apply the action

If the action would take the counter beyond a limit don't apply the action.

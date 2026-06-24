# Bash Shortcuts (.bashrc)

## Aliases
| Shortcut  | Expands To                            |
|-----------|---------------------------------------|
| `ns-lis`  | `ns LISTENING`                        |
| `ns-es`   | `ns ESTABLISHED`                      |
| `c`       | `clear`                               |
| `cl`      | `clear`                               |
| `cla`     | `claude`                              |
| `cl-skp`  | `claude --dangerously-skip-permissions` |

## Functions
| Shortcut    | What It Does                                          |
|-------------|-------------------------------------------------------|
| `ns`         | Shows all connections (`netstat -ano`)                    |
| `ns <filter>` | Filters connections by keyword, e.g. `ns LISTENING`, `ns ESTABLISHED` |
| `kp <port>` | Finds the PID listening on that port and kills it (`taskkill /F`) |

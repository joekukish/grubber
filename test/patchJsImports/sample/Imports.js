import defaultExport from "./Hello";
import * as name from "./Hello";
import { export1 } from "./Hello";
import { export1 as alias1 } from "./Hello";
import { default as alias } from "./Hello";
import { export1, export2 } from "./Hello";
import { export1, export2 as alias2 /* … */ } from "./Hello";
import { "string name" as alias } from "./Hello";
import defaultExport, { export1 /* … */ } from "./Hello";
import defaultExport, * as name from "./Hello";
import "./Hello";

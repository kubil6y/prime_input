export enum KeyCode {
    // Alphabet
    A = "a",
    B = "b",
    C = "c",
    D = "d",
    E = "e",
    F = "f",
    G = "g",
    H = "h",
    I = "i",
    J = "j",
    K = "k",
    L = "l",
    M = "m",
    N = "n",
    O = "o",
    P = "p",
    Q = "q",
    R = "r",
    S = "s",
    T = "t",
    U = "u",
    V = "v",
    W = "w",
    X = "x",
    Y = "y",
    Z = "z",

    // Numbers
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",

    // Function Keys
    F1 = "F1",
    F2 = "F2",
    F3 = "F3",
    F4 = "F4",
    F5 = "F5",
    F6 = "F6",
    F7 = "F7",
    F8 = "F8",
    F9 = "F9",
    F10 = "F10",
    F11 = "F11",
    F12 = "F12",

    // Modifier Keys
    Shift = "Shift",
    Control = "Control",
    Alt = "Alt",
    Meta = "Meta", // Windows/Command key

    // Navigation Keys
    ArrowUp = "ArrowUp",
    ArrowDown = "ArrowDown",
    ArrowLeft = "ArrowLeft",
    ArrowRight = "ArrowRight",

    // Whitespace Keys
    Space = " ",
    Enter = "Enter",
    Tab = "Tab",
    Backspace = "Backspace",
    Escape = "Escape",

    // Symbols
    Semicolon = ";",
    Equal = "=",
    Comma = ",",
    Minus = "-",
    Period = ".",
    Slash = "/",
    Backtick = "`",
    BracketLeft = "[",
    Backslash = "\\",
    BracketRight = "]",
    Quote = "'",
}

// Create a reverse mapping from key values to KeyCode enum keys
export const KeyCodeReverseMap: { [key: string]: KeyCode } = {
    a: KeyCode.A,
    b: KeyCode.B,
    c: KeyCode.C,
    d: KeyCode.D,
    e: KeyCode.E,
    f: KeyCode.F,
    g: KeyCode.G,
    h: KeyCode.H,
    i: KeyCode.I,
    j: KeyCode.J,
    k: KeyCode.K,
    l: KeyCode.L,
    m: KeyCode.M,
    n: KeyCode.N,
    o: KeyCode.O,
    p: KeyCode.P,
    q: KeyCode.Q,
    r: KeyCode.R,
    s: KeyCode.S,
    t: KeyCode.T,
    u: KeyCode.U,
    v: KeyCode.V,
    w: KeyCode.W,
    x: KeyCode.X,
    y: KeyCode.Y,
    z: KeyCode.Z,
    "0": KeyCode.Zero,
    "1": KeyCode.One,
    "2": KeyCode.Two,
    "3": KeyCode.Three,
    "4": KeyCode.Four,
    "5": KeyCode.Five,
    "6": KeyCode.Six,
    "7": KeyCode.Seven,
    "8": KeyCode.Eight,
    "9": KeyCode.Nine,
    F1: KeyCode.F1,
    F2: KeyCode.F2,
    F3: KeyCode.F3,
    F4: KeyCode.F4,
    F5: KeyCode.F5,
    F6: KeyCode.F6,
    F7: KeyCode.F7,
    F8: KeyCode.F8,
    F9: KeyCode.F9,
    F10: KeyCode.F10,
    F11: KeyCode.F11,
    F12: KeyCode.F12,
    Shift: KeyCode.Shift,
    Control: KeyCode.Control,
    Alt: KeyCode.Alt,
    Meta: KeyCode.Meta,
    ArrowUp: KeyCode.ArrowUp,
    ArrowDown: KeyCode.ArrowDown,
    ArrowLeft: KeyCode.ArrowLeft,
    ArrowRight: KeyCode.ArrowRight,
    " ": KeyCode.Space,
    Enter: KeyCode.Enter,
    Tab: KeyCode.Tab,
    Backspace: KeyCode.Backspace,
    Escape: KeyCode.Escape,
    ";": KeyCode.Semicolon,
    "=": KeyCode.Equal,
    ",": KeyCode.Comma,
    "-": KeyCode.Minus,
    ".": KeyCode.Period,
    "/": KeyCode.Slash,
    "`": KeyCode.Backtick,
    "[": KeyCode.BracketLeft,
    "\\": KeyCode.Backslash,
    "]": KeyCode.BracketRight,
    "'": KeyCode.Quote,
};

const map = {

  terrain: ["oooooooooooooooooooooooooooooo",
            "oooooooooooooooooooooooooooooo", 
            "oooooooooo  oooooooooooooooooo", 
            "xooooo   mmm  oooooooooooooooo",
            "xxo    mmm     mmooooooooooooo",
            "ooo   m  mmmmm  mooooooooooooo",
            "xxmmmmm       mmm oooooooooooo",
            "xx  m mm  m   m m  ooooooooooo",
            "xx    mmm m  m   mmmxxoooooooo",
            "xxm  m         m   xxxxoxooooo",
            "xxmmmm         mm   xooxxxoooo",
            "xxmmmm       mmmm   xxooxxoooo",
            "xxmm mm m  o mmmmm   xxxooxxxo",
            "xx m  mm m mmmm  mm  xxxooooxx",
            "xx  mmmmmmmmmm   mmmmxxxxxoooo",
            "xx  mmmmm  m    mmmmmxxxxxxooo",
            "xx    mmmm   mmm mmm xxxxxxxxo",
            "xx     mm mmmmmmmm mxxxxxxxxxo",
            "xx       mmmmmmm     xxxxxxxxx",
            "xx            m     m xxxxxxxx",
            "xx      m            mm xxxxxx",
            "xx                    mxxxxxxx",
            "xx                     xxxxxxx",
            "xx                     xxxxxxx",
            "xx                      xxxxxx",
            "xx                      xxxxxx",
            "xx                        xxxx",
            "xx                        xooo",
            "xx                      oooooo",
            "xx                     ooooooo",
            "xxxo                   ooooooo",
            "xxoo                  oooooooo",
            "xxoo                  oooooooo",
            "xooo                  oooooooo",
            "xxoo oooo              ooooooo",
            "xxo o  o             ooooooooo",
            "xxxxo                ooooooooo",
            "xxxooo              oooooooooo",
            "xxxxoooxo            ooooooooo",
            "xxxoxxxo      mm    oooooooooo",
            "xxxxxxxo     mm     oooooooooo",
            "xxxxxo     mm       oooooooooo",
            "xxxxxo   mm           oooooooo",
            "xxxxo            oo    ooooooo",
            "xxxx            ooooo   oooooo",
            "xx  m     oo  oooooooo  oooooo",
            "xx mm    ooooooooooooooooooooo",
            "  m   oooooooooooooooooooooooo",
            "    o oooooooooooooooooooooooo",
            "  oooooooooooooooooooooooooooo",
            "oooooooooooooooooooooooooooooo"],

  // segment IDs: 0 = southeastern line, 1 = southern, 2 = southwestern, 3 = northwestern, 4 = northern, 5 = northeastern

  riverSegments: [
    // Columbia
    {x: 4, y: 4, id: 1}, {x: 5, y: 4, id: 2}, {x: 5, y: 4, id: 1}, {x: 6, y: 5, id: 2}, {x: 6, y: 5, id: 1},
    {x: 6, y: 5, id: 0}, {x: 7, y: 4, id: 1}, {x: 7, y: 4, id: 0}, {x: 7, y: 4, id: 5}, {x: 7, y: 4, id: 4},
    {x: 7, y: 3, id: 2}, {x: 7, y: 3, id: 3}, {x: 7, y: 3, id: 4}, {x: 8, y: 3, id: 3}, {x: 8, y: 3, id: 4},
    {x: 9, y: 2, id: 3},
    // Snake
    {x:  8, y: 4, id: 1}, {x:  9, y: 4, id: 2}, {x:  9, y: 5, id: 4}, {x:  9, y: 5, id: 5}, {x:  9, y: 5, id: 0},
    {x:  9, y: 5, id: 1}, {x:  9, y: 6, id: 3}, {x:  9, y: 6, id: 2}, {x:  9, y: 7, id: 3}, {x:  9, y: 7, id: 2},
    {x:  9, y: 7, id: 1}, {x: 10, y: 8, id: 2}, {x: 10, y: 8, id: 1}, {x: 11, y: 8, id: 2}, {x: 11, y: 8, id: 1},
    {x: 12, y: 9, id: 2}, {x: 12, y: 9, id: 1}, {x: 12, y: 9, id: 0}, {x: 12, y: 9, id: 5}, {x: 13, y: 8, id: 3},
    {x: 13, y: 8, id: 4},
    // Sacramento
    {x: 3, y: 12, id: 1}, {x: 3, y: 12, id: 0}, {x: 3, y: 12, id: 5}, {x: 3, y: 11, id: 0}, {x: 3, y: 11, id: 5},
    {x: 3, y: 10, id: 0}, {x: 3, y: 10, id: 5}, {x: 4, y: 10, id: 3}, {x: 4, y: 10, id: 4},
    // San Joquin
    { x: 4, y: 13, id: 2}, { x: 4, y: 14, id: 4}, { x: 4, y: 14, id: 5}, { x: 4, y: 14, id: 0}, { x: 5, y: 14, id: 2}, 
    { x: 5, y: 14, id: 1}, { x: 5, y: 14, id: 0},
    // Colorado
    {x:  9, y: 18, id: 0}, {x:  9, y: 18, id: 5}, {x:  9, y: 17, id: 0}, {x:  9, y: 17, id: 5}, {x:  9, y: 16, id: 0}, 
    {x:  9, y: 16, id: 5}, {x: 10, y: 16, id: 3}, {x: 10, y: 16, id: 4}, {x: 10, y: 16, id: 5}, {x: 11, y: 15, id: 1},
    {x: 11, y: 15, id: 0}, {x: 12, y: 15, id: 1}, {x: 12, y: 15, id: 0}, {x: 13, y: 14, id: 1}, {x: 13, y: 14, id: 0},
    {x: 14, y: 14, id: 2}, {x: 14, y: 14, id: 3}, {x: 14, y: 14, id: 4}, {x: 15, y: 13, id: 3}, {x: 15, y: 13, id: 4},
    {x: 16, y: 13, id: 3}, {x: 16, y: 13, id: 4}, {x: 17, y: 12, id: 3}, {x: 17, y: 12, id: 4},
    // Green
    {x: 15, y: 12, id: 2}, {x: 15, y: 12, id: 3}, {x: 15, y: 12, id: 4}, {x: 15, y: 11, id: 0}, {x: 15, y: 11, id: 5},
    {x: 15, y: 11, id: 4}, {x: 15, y: 10, id: 2}, {x: 15, y: 10, id: 3}, {x: 15, y: 9, id: 2},
    // ??? joining Colorado
    {x: 10, y: 15, id: 0}, {x: 11, y: 14, id: 0}, {x: 11, y: 14, id: 1}, {x: 12, y: 14, id: 0}, {x: 12, y: 14, id: 1},
    {x: 12, y: 14, id: 5}, {x: 12, y: 13, id: 0}, {x: 12, y: 13, id: 3}, {x: 12, y: 13, id: 4}, {x: 12, y: 13, id: 5},
    // ??? joining Colorado
    {x: 14, y: 15, id: 4}, {x: 14, y: 15, id: 5}, {x: 15, y: 15, id: 4}, {x: 15, y: 15, id: 5}, {x: 16, y: 16, id: 4}, 
    // Gila
    {x: 10, y: 19, id: 0}, {x: 11, y: 18, id: 1}, {x: 11, y: 18, id: 0}, {x: 12, y: 18, id: 1}, {x: 13, y: 18, id: 2},
    {x: 13, y: 18, id: 1}, {x: 13, y: 18, id: 0}, {x: 14, y: 18, id: 1},
    // Rio Grande
    {x: 17, y: 15, id: 5}, {x: 17, y: 15, id: 0}, {x: 17, y: 16, id: 5}, {x: 17, y: 16, id: 0}, {x: 17, y: 17, id: 5}, 
    {x: 17, y: 17, id: 0}, {x: 17, y: 18, id: 4}, {x: 17, y: 18, id: 3}, {x: 17, y: 18, id: 2}, {x: 17, y: 18, id: 1},
    {x: 17, y: 19, id: 5}, {x: 17, y: 19, id: 0}, {x: 18, y: 20, id: 2}, {x: 18, y: 20, id: 1}, {x: 18, y: 21, id: 5},
    {x: 18, y: 21, id: 0}, {x: 19, y: 21, id: 2}, {x: 19, y: 21, id: 1}, {x: 19, y: 22, id: 5}, {x: 19, y: 22, id: 0},
    {x: 20, y: 23, id: 2}, {x: 20, y: 23, id: 1}, {x: 20, y: 23, id: 0}, {x: 21, y: 22, id: 1}, {x: 21, y: 22, id: 0},
    {x: 22, y: 22, id: 1}, {x: 23, y: 22, id: 2}, {x: 23, y: 22, id: 1}, {x: 24, y: 23, id: 2}, {x: 24, y: 23, id: 1},
    {x: 25, y: 23, id: 2}, {x: 25, y: 23, id: 1}, {x: 26, y: 24, id: 2}, {x: 26, y: 25, id: 3}, {x: 26, y: 25, id: 2},
    {x: 26, y: 25, id: 1}, {x: 27, y: 25, id: 2}, {x: 27, y: 25, id: 1},
    // Pecos
    {x: 18, y: 17, id: 5}, {x: 19, y: 17, id: 4}, {x: 19, y: 17, id: 5}, {x: 19, y: 17, id: 0}, {x: 19, y: 18, id: 5},
    {x: 19, y: 18, id: 0}, {x: 19, y: 19, id: 5}, {x: 19, y: 19, id: 0}, {x: 19, y: 20, id: 5}, {x: 20, y: 21, id: 4}, 
    {x: 20, y: 21, id: 5}, {x: 21, y: 21, id: 4}, {x: 21, y: 21, id: 5}, {x: 22, y: 22, id: 4}, {x: 22, y: 22, id: 5}, 
    {x: 22, y: 22, id: 0}, 
    // ???
    {x: 23, y: 19, id: 4}, {x: 23, y: 19, id: 5}, {x: 23, y: 19, id: 0}, {x: 23, y: 20, id: 5}, {x: 24, y: 21, id: 4}, 
    {x: 25, y: 20, id: 3}, {x: 25, y: 20, id: 4}, {x: 25, y: 20, id: 5}, {x: 25, y: 20, id: 0}, {x: 25, y: 21, id: 5}, 
    {x: 26, y: 22, id: 4}, {x: 26, y: 22, id: 5}, {x: 27, y: 22, id: 4}, {x: 27, y: 22, id: 5}, {x: 27, y: 22, id: 0},
    {x: 27, y: 23, id: 5},
    // Brazos
    {x: 24, y: 19, id: 4}, {x: 24, y: 19, id: 5}, {x: 25, y: 19, id: 4}, {x: 25, y: 19, id: 5}, {x: 26, y: 20, id: 4}, 
    {x: 26, y: 20, id: 5}, {x: 26, y: 20, id: 0}, {x: 26, y: 21, id: 5}, {x: 27, y: 21, id: 4}, {x: 27, y: 21, id: 5}, 
    {x: 28, y: 22, id: 4}, {x: 28, y: 22, id: 5}, {x: 28, y: 22, id: 0}, {x: 28, y: 23, id: 5}, 
    // Red (South)
    {x: 23, y: 17, id: 4}, {x: 23, y: 17, id: 5}, {x: 24, y: 18, id: 4}, {x: 24, y: 18, id: 5}, {x: 25, y: 18, id: 4},
    {x: 26, y: 18, id: 3}, {x: 26, y: 18, id: 4}, {x: 26, y: 18, id: 5}, {x: 27, y: 18, id: 4}, {x: 28, y: 18, id: 3},
    {x: 28, y: 18, id: 4}, {x: 28, y: 18, id: 5}, {x: 29, y: 18, id: 4}, {x: 29, y: 18, id: 5}, {x: 30, y: 19, id: 4},
    {x: 30, y: 19, id: 5}, {x: 30, y: 19, id: 0}, {x: 30, y: 20, id: 5}, {x: 31, y: 20, id: 4}, {x: 32, y: 20, id: 3},
    {x: 32, y: 20, id: 4},
    // Canadian
    {x: 20, y: 16, id: 4}, {x: 21, y: 15, id: 3}, {x: 21, y: 15, id: 4}, {x: 21, y: 15, id: 5}, {x: 22, y: 16, id: 4},
    {x: 23, y: 15, id: 3}, {x: 23, y: 15, id: 4}, {x: 23, y: 15, id: 5}, {x: 24, y: 16, id: 4}, {x: 24, y: 16, id: 5}, 
    {x: 25, y: 16, id: 4}, {x: 25, y: 16, id: 5}, {x: 26, y: 17, id: 4}, {x: 27, y: 16, id: 3}, {x: 27, y: 16, id: 4},
    {x: 28, y: 16, id: 3},
    // Arkansas
    {x: 20, y: 14, id: 4}, {x: 20, y: 14, id: 5}, {x: 21, y: 14, id: 4}, {x: 22, y: 14, id: 3}, {x: 22, y: 14, id: 4},
    {x: 22, y: 14, id: 5}, {x: 23, y: 14, id: 4}, {x: 24, y: 14, id: 3}, {x: 24, y: 14, id: 4}, {x: 25, y: 13, id: 3},
    {x: 25, y: 13, id: 4}, {x: 25, y: 13, id: 5}, {x: 26, y: 14, id: 4}, {x: 26, y: 14, id: 5}, {x: 26, y: 14, id: 0},
    {x: 26, y: 15, id: 5}, {x: 27, y: 15, id: 4}, {x: 27, y: 15, id: 5}, {x: 28, y: 16, id: 4}, {x: 28, y: 16, id: 5},
    {x: 29, y: 16, id: 4}, {x: 30, y: 16, id: 3}, {x: 30, y: 16, id: 4}, {x: 30, y: 16, id: 5}, {x: 31, y: 16, id: 4}, 
    {x: 31, y: 16, id: 5}, {x: 32, y: 17, id: 4},
    // ???
    {x: 23, y: 12, id: 3}, {x: 23, y: 12, id: 4}, {x: 23, y: 12, id: 5}, {x: 24, y: 13, id: 4}, {x: 25, y: 12, id: 3},
    {x: 25, y: 12, id: 4}, {x: 26, y: 12, id: 3}, {x: 26, y: 12, id: 4}, {x: 26, y: 12, id: 5}, {x: 27, y: 11, id: 1},
    {x: 27, y: 11, id: 0},
    // Sweetwater
    {x: 18, y:  9, id: 3}, {x: 18, y:  9, id: 4}, {x: 18, y:  9, id: 5}, {x: 19, y:  9, id: 4}, {x: 19, y:  9, id: 5},
    {x: 20, y: 10, id: 4}, {x: 20, y: 10, id: 5}, {x: 21, y: 10, id: 4}, {x: 21, y: 10, id: 5},
    // Platte
    {x: 19, y: 12, id: 4}, {x: 20, y: 12, id: 3}, {x: 20, y: 12, id: 4}, {x: 21, y: 11, id: 3}, {x: 21, y: 11, id: 4}, 
    {x: 22, y: 11, id: 3}, {x: 22, y: 11, id: 4}, {x: 22, y: 11, id: 5}, {x: 23, y: 11, id: 4}, {x: 24, y: 11, id: 3}, 
    {x: 24, y: 11, id: 4}, {x: 25, y: 10, id: 3}, {x: 25, y: 10, id: 4}, {x: 25, y: 10, id: 5}, {x: 26, y: 11, id: 4},
    {x: 27, y: 10, id: 3},
    // Yellowstone
    {x: 15, y:  7, id: 3}, {x: 15, y:  6, id: 2}, {x: 15, y:  6, id: 3}, {x: 15, y:  6, id: 4}, {x: 16, y:  6, id: 3},
    {x: 16, y:  6, id: 4}, {x: 17, y:  5, id: 3}, {x: 17, y:  5, id: 4}, {x: 17, y:  5, id: 5}, {x: 18, y:  6, id: 4},
    {x: 19, y:  5, id: 3}, {x: 19, y:  4, id: 2}, {x: 19, y:  4, id: 3}, {x: 19, y:  4, id: 4}, {x: 20, y:  4, id: 3},
    // Missouri
    {x: 13, y:  6, id: 3}, {x: 13, y:  6, id: 4}, {x: 14, y:  6, id: 3}, {x: 14, y:  5, id: 2}, {x: 14, y:  5, id: 3},
    {x: 14, y:  4, id: 2}, {x: 14, y:  4, id: 3}, {x: 14, y:  4, id: 4}, {x: 14, y:  4, id: 5}, {x: 15, y:  4, id: 4},
    {x: 15, y:  4, id: 5}, {x: 16, y:  5, id: 4}, {x: 17, y:  4, id: 3}, {x: 17, y:  4, id: 4}, {x: 18, y:  4, id: 3},
    {x: 18, y:  4, id: 4}, {x: 19, y:  3, id: 3}, {x: 19, y:  3, id: 4}, {x: 19, y:  3, id: 5}, {x: 20, y:  4, id: 4},
    {x: 20, y:  4, id: 5}, {x: 21, y:  4, id: 4}, {x: 21, y:  4, id: 5}, {x: 21, y:  4, id: 0}, {x: 21, y:  5, id: 5},
    {x: 22, y:  6, id: 4}, {x: 22, y:  6, id: 5}, {x: 22, y:  6, id: 0}, {x: 22, y:  7, id: 5}, {x: 23, y:  7, id: 4},
    {x: 23, y:  7, id: 5}, {x: 23, y:  7, id: 0}, {x: 23, y:  8, id: 5}, {x: 24, y:  9, id: 4}, {x: 25, y:  8, id: 3},
    {x: 25, y:  8, id: 4}, {x: 25, y:  8, id: 5}, {x: 26, y:  9, id: 4}, {x: 26, y:  9, id: 5}, {x: 26, y:  9, id: 0},
    {x: 26, y: 10, id: 5}, {x: 27, y: 10, id: 4}, {x: 27, y: 10, id: 5}, {x: 27, y: 10, id: 0}, {x: 27, y: 11, id: 5},
    {x: 28, y: 12, id: 4}, {x: 28, y: 12, id: 5}, {x: 29, y: 12, id: 4}, {x: 29, y: 12, id: 5}, {x: 30, y: 13, id: 4},
    {x: 31, y: 12, id: 3}, {x: 31, y: 12, id: 4}, {x: 32, y: 12, id: 3},
    // Red (North)
    {x: 26, y:  5, id: 3}, {x: 26, y:  4, id: 2}, {x: 26, y:  4, id: 3}, {x: 26, y:  3, id: 2}, {x: 26, y:  3, id: 3},
    {x: 26, y:  2, id: 2},
    // ??? joining Mississippi
    {x: 26, y:  5, id: 1}, {x: 27, y:  5, id: 2}, {x: 27, y:  5, id: 1}, {x: 28, y:  6, id: 2}, {x: 28, y:  6, id: 1},
    {x: 28, y:  6, id: 0},
    // Mississippi
    {x: 28, y:  3, id: 2}, {x: 28, y:  4, id: 3}, {x: 28, y:  4, id: 2}, {x: 28, y:  5, id: 3}, {x: 28, y:  5, id: 2},
    {x: 28, y:  5, id: 1}, {x: 29, y:  5, id: 2}, {x: 29, y:  5, id: 1}, {x: 30, y:  6, id: 2}, {x: 30, y:  6, id: 1},
    {x: 31, y:  6, id: 2}, {x: 31, y:  7, id: 3}, {x: 31, y:  7, id: 2}, {x: 31, y:  8, id: 4}, {x: 31, y:  8, id: 5},
    {x: 31, y:  8, id: 0}, {x: 31, y:  8, id: 1}, {x: 31, y:  9, id: 3}, {x: 31, y:  9, id: 2}, {x: 31, y: 10, id: 3},
    {x: 31, y: 10, id: 2}, {x: 31, y: 10, id: 1}, {x: 32, y: 11, id: 2}, {x: 32, y: 11, id: 1}, {x: 32, y: 12, id: 5},
    {x: 32, y: 12, id: 0}, {x: 32, y: 13, id: 5}, {x: 33, y: 12, id: 1}, {x: 33, y: 13, id: 5}, {x: 33, y: 13, id: 0},
    {x: 33, y: 14, id: 5}, {x: 33, y: 14, id: 0}, {x: 33, y: 14, id: 1}, {x: 33, y: 15, id: 3}, {x: 33, y: 15, id: 2},
    {x: 33, y: 16, id: 3}, {x: 33, y: 16, id: 2}, {x: 33, y: 17, id: 3}, {x: 33, y: 17, id: 2}, {x: 33, y: 18, id: 3}, 
    {x: 33, y: 18, id: 2}, {x: 33, y: 19, id: 3}, {x: 33, y: 19, id: 2}, {x: 33, y: 20, id: 3}, {x: 33, y: 20, id: 2},
    {x: 33, y: 20, id: 1}, {x: 34, y: 21, id: 2}, {x: 34, y: 21, id: 1},
    // Wabash
    {x: 36, y: 10, id: 4}, {x: 36, y: 10, id: 3}, {x: 35, y: 10, id: 4}, {x: 35, y: 10, id: 3}, {x: 35, y: 10, id: 2}, 
    {x: 35, y: 11, id: 3}, {x: 35, y: 11, id: 2}, {x: 35, y: 12, id: 3}, {x: 35, y: 12, id: 2}, 
    // ??? joining Ohio
    {x: 42, y: 10, id: 3}, {x: 42, y:  9, id: 2}, {x: 42, y:  9, id: 3}, {x: 42, y:  8, id: 2},
    // Ohio
    {x: 42, y:  7, id: 2}, {x: 42, y:  8, id: 3}, {x: 41, y:  8, id: 4}, {x: 41, y:  8, id: 3}, {x: 41, y:  8, id: 2}, 
    {x: 41, y:  9, id: 3}, {x: 41, y:  9, id: 2}, {x: 41, y: 10, id: 3}, {x: 40, y: 10, id: 1}, {x: 39, y: 10, id: 0}, 
    {x: 39, y: 10, id: 1}, {x: 38, y: 11, id: 0}, {x: 38, y: 11, id: 1}, {x: 38, y: 11, id: 2}, {x: 37, y: 11, id: 4}, 
    {x: 37, y: 11, id: 3}, {x: 37, y: 11, id: 2}, {x: 37, y: 12, id: 3}, {x: 36, y: 13, id: 4}, {x: 36, y: 13, id: 3},
    {x: 35, y: 13, id: 4}, {x: 35, y: 13, id: 3}, {x: 34, y: 14, id: 4},
    // Tennessee
    {x: 41, y: 12, id: 3}, {x: 40, y: 13, id: 4}, {x: 40, y: 13, id: 3}, {x: 40, y: 13, id: 2}, {x: 40, y: 14, id: 3}, 
    {x: 39, y: 14, id: 4}, {x: 39, y: 14, id: 3}, {x: 38, y: 15, id: 4}, {x: 38, y: 15, id: 3}, {x: 37, y: 15, id: 4}, 
    {x: 37, y: 15, id: 3}, {x: 36, y: 16, id: 4}, {x: 36, y: 16, id: 3}, {x: 35, y: 16, id: 4}, {x: 35, y: 15, id: 2}, 
    {x: 35, y: 15, id: 3}, {x: 35, y: 14, id: 2}, {x: 35, y: 14, id: 3}, {x: 35, y: 13, id: 2}, 
    // Alabama
    {x: 37, y: 15, id: 0}, {x: 37, y: 16, id: 5}, {x: 37, y: 16, id: 0}, {x: 37, y: 17, id: 5}, {x: 37, y: 17, id: 0}, 
    {x: 37, y: 17, id: 1}, {x: 37, y: 18, id: 3}, {x: 37, y: 18, id: 2}, {x: 37, y: 19, id: 3}, {x: 37, y: 19, id: 2}, 
    // Chattahoochee
    {x: 38, y: 16, id: 0}, {x: 38, y: 17, id: 5}, {x: 38, y: 17, id: 0}, {x: 38, y: 18, id: 5}, {x: 38, y: 18, id: 0},
    {x: 38, y: 19, id: 5}, {x: 38, y: 19, id: 0}, {x: 38, y: 20, id: 5},
    // Savannah
    {x: 40, y: 15, id: 1}, {x: 41, y: 15, id: 2}, {x: 41, y: 15, id: 1}, {x: 42, y: 16, id: 2}, {x: 42, y: 16, id: 1},
    {x: 43, y: 16, id: 2},
    // Pee Dee
    {x: 41, y: 13, id: 3}, {x: 41, y: 13, id: 4}, {x: 41, y: 13, id: 5}, {x: 41, y: 13, id: 0}, {x: 41, y: 14, id: 5},
    {x: 42, y: 14, id: 1}, {x: 43, y: 14, id: 2}, {x: 43, y: 14, id: 1}, {x: 44, y: 15, id: 2},
    // ???
    {x: 42, y: 13, id: 5}, {x: 43, y: 12, id: 1}, {x: 43, y: 13, id: 5}, {x: 43, y: 13, id: 0}, {x: 44, y: 14, id: 2},
    {x: 44, y: 14, id: 1},
    // Potomac
    {x: 42, y: 12, id: 3}, {x: 42, y: 12, id: 4}, {x: 42, y: 12, id: 5}, {x: 43, y: 11, id: 1}, {x: 43, y: 11, id: 0},
    {x: 44, y: 12, id: 4},
    // ???
    {x: 43, y: 10, id: 3}, {x: 43, y: 10, id: 4}, {x: 44, y: 10, id: 2}, {x: 44, y: 10, id: 1},
    // Susquehanna
    {x: 44, y:  6, id: 2}, {x: 44, y:  7, id: 3}, {x: 44, y:  7, id: 2}, {x: 44, y:  8, id: 3}, {x: 44, y:  8, id: 2},
    {x: 44, y:  8, id: 1}, {x: 44, y:  9, id: 5}, {x: 44, y:  9, id: 0}, {x: 44, y: 10, id: 5},
    // Delaware
    {x: 44, y:  6, id: 0}, {x: 44, y:  7, id: 5}, {x: 45, y:  7, id: 4}, {x: 45, y:  7, id: 5}, {x: 45, y:  7, id: 0},
    {x: 45, y:  8, id: 5},
    // Hudson
    {x: 46, y:  3, id: 2}, {x: 46, y:  4, id: 3}, {x: 46, y:  4, id: 2}, {x: 46, y:  5, id: 3}, {x: 46, y:  5, id: 2},
    {x: 46, y:  6, id: 3}, {x: 46, y:  6, id: 2}, {x: 46, y:  6, id: 1},
    // Connecticut
    {x: 47, y:  1, id: 2}, {x: 47, y:  2, id: 3}, {x: 47, y:  2, id: 2}, {x: 47, y:  3, id: 3}, {x: 47, y:  3, id: 2}, 
    {x: 47, y:  4, id: 3}, {x: 47, y:  4, id: 2}, {x: 47, y:  5, id: 3}, {x: 47, y:  5, id: 2}, 
  ]
}
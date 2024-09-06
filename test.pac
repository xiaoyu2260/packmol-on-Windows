# 距离容差
tolerance 2.0

# 文件格式PDB(默认类型, 不写也可以)
filetype pdb
output test_membrane.pdb

# 膜蛋白分子固定于界面处
# 其中心固定于盒子中心(0, 0, 0)
# 并旋转(pi/2, pi/2, pi/2) 

#structure protein.pdb
#  centerofmass
#  fixed 0. 0. 0. 1.57 1.57 1.57
#end structure

# 上方脂质层，极性头部向上指向水盒子
structure POPC.pdb
  number 150
  inside box -40. -40. 0. 40. 40. 28.
  atoms 85 88
    below plane 0. 0. 1. 2.
  end atoms
  atoms 131
    below plane 0. 0. 1. 19.
  end atoms
  atoms 20 23
    above plane 0. 0. 1. 26.
  end atoms
end structure

# 下方脂质层
# 与上面类似, 但取向相反
structure POPC.pdb
  number 150
  inside box -40. -40. -28. 40. 40. 0.
  atoms 20 23
    below plane 0. 0. 1. -26.
  end atoms
  atoms 85 88
    above plane 0. 0. 1. -2.
  end atoms
  atoms 131
    above plane 0. 0. 1. -19.
  end atoms
end structure

# 加水分子于双脂层上方
structure water.pdb
  number 1000
  inside box -40. -40. 28. 40. 40. 38.
end structure

# 加水分子于双脂层下方
structure water.pdb
  number 1000
  inside box -40. -40. -38. 40. 40. -28.
end structure
# �����ݲ�
tolerance 2.0

# �ļ���ʽPDB(Ĭ������, ��дҲ����)
filetype pdb
output test_membrane.pdb

# Ĥ���׷��ӹ̶��ڽ��洦
# �����Ĺ̶��ں�������(0, 0, 0)
# ����ת(pi/2, pi/2, pi/2) 

#structure protein.pdb
#  centerofmass
#  fixed 0. 0. 0. 1.57 1.57 1.57
#end structure

# �Ϸ�֬�ʲ㣬����ͷ������ָ��ˮ����
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

# �·�֬�ʲ�
# ����������, ��ȡ���෴
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

# ��ˮ������˫֬���Ϸ�
structure water.pdb
  number 1000
  inside box -40. -40. 28. 40. 40. 38.
end structure

# ��ˮ������˫֬���·�
structure water.pdb
  number 1000
  inside box -40. -40. -38. 40. 40. -28.
end structure
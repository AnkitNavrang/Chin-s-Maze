let pohea, potai, xin, yin, xtin, ytin, rndcol;
// including hea
let lchi;
// face color
let mcol = 'whitesmoke';
//hell yeah moment
let myvar = 70;
//just in case
let rnd , fnd;
//necessary glvar
let proback, profront, protop, prodown;
let xo, xi, yo, yi; 
//new potai getmoveget
let npotai;
//you know what it is... its chin mannnn!
let chin = ['head', 'to', 'tail'];
//tail and before tail
let chu,shu;
let chuxin , chuyin, shuyin, shuxin;
//its the entire screen
let ar = ['grid0--1', 'grid0--2', 'grid0--3', 'grid0--4', 'grid0--5', 'grid0--6', 'grid0--7', 'grid0--8', 'grid0--9', 'grid0--10', 'grid0--11', 'grid0--12', 'grid0--13', 'grid0--14', 'grid0--15', 'grid0--16', 'grid0--17', 'grid0--18', 'grid0--19', 'grid0--20', 'grid0--21', 'grid0--22', 'grid0--23', 'grid0--24', 'grid0--25', 'grid0--26', 'grid0--27', 'grid0--28', 'grid0--29', 'grid0--30', 'grid0--31', 'grid0--32', 'grid0--33', 'grid0--34', 'grid0--35', 'grid0--36', 'grid0--37', 'grid0--38', 'grid1--1', 'grid1--2', 'grid1--3', 'grid1--4', 'grid1--5', 'grid1--6', 'grid1--7', 'grid1--8', 'grid1--9', 'grid1--10', 'grid1--11', 'grid1--12', 'grid1--13', 'grid1--14', 'grid1--15', 'grid1--16', 'grid1--17', 'grid1--18', 'grid1--19', 'grid1--20', 'grid1--21', 'grid1--22', 'grid1--23', 'grid1--24', 'grid1--25', 'grid1--26', 'grid1--27', 'grid1--28', 'grid1--29', 'grid1--30', 'grid1--31', 'grid1--32', 'grid1--33', 'grid1--34', 'grid1--35', 'grid1--36', 'grid1--37', 'grid1--38', 'grid2--1', 'grid2--2', 'grid2--3', 'grid2--4', 'grid2--5', 'grid2--6', 'grid2--7', 'grid2--8', 'grid2--9', 'grid2--10', 'grid2--11', 'grid2--12', 'grid2--13', 'grid2--14', 'grid2--15', 'grid2--16', 'grid2--17', 'grid2--18', 'grid2--19', 'grid2--20', 'grid2--21', 'grid2--22', 'grid2--23', 'grid2--24', 'grid2--25', 'grid2--26', 'grid2--27', 'grid2--28', 'grid2--29', 'grid2--30', 'grid2--31', 'grid2--32', 'grid2--33', 'grid2--34', 'grid2--35', 'grid2--36', 'grid2--37', 'grid2--38', 'grid3--1', 'grid3--2', 'grid3--3', 'grid3--4', 'grid3--5', 'grid3--6', 'grid3--7', 'grid3--8', 'grid3--9', 'grid3--10', 'grid3--11', 'grid3--12', 'grid3--13', 'grid3--14', 'grid3--15', 'grid3--16', 'grid3--17', 'grid3--18', 'grid3--19', 'grid3--20', 'grid3--21', 'grid3--22', 'grid3--23', 'grid3--24', 'grid3--25', 'grid3--26', 'grid3--27', 'grid3--28', 'grid3--29', 'grid3--30', 'grid3--31', 'grid3--32', 'grid3--33', 'grid3--34', 'grid3--35', 'grid3--36', 'grid3--37', 'grid3--38', 'grid4--1', 'grid4--2', 'grid4--3', 'grid4--4', 'grid4--5', 'grid4--6', 'grid4--7', 'grid4--8', 'grid4--9', 'grid4--10', 'grid4--11', 'grid4--12', 'grid4--13', 'grid4--14', 'grid4--15', 'grid4--16', 'grid4--17', 'grid4--18', 'grid4--19', 'grid4--20', 'grid4--21', 'grid4--22', 'grid4--23', 'grid4--24', 'grid4--25', 'grid4--26', 'grid4--27', 'grid4--28', 'grid4--29', 'grid4--30', 'grid4--31', 'grid4--32', 'grid4--33', 'grid4--34', 'grid4--35', 'grid4--36', 'grid4--37', 'grid4--38', 'grid5--1', 'grid5--2', 'grid5--3', 'grid5--4', 'grid5--5', 'grid5--6', 'grid5--7', 'grid5--8', 'grid5--9', 'grid5--10', 'grid5--11', 'grid5--12', 'grid5--13', 'grid5--14', 'grid5--15', 'grid5--16', 'grid5--17', 'grid5--18', 'grid5--19', 'grid5--20', 'grid5--21', 'grid5--22', 'grid5--23', 'grid5--24', 'grid5--25', 'grid5--26', 'grid5--27', 'grid5--28', 'grid5--29', 'grid5--30', 'grid5--31', 'grid5--32', 'grid5--33', 'grid5--34', 'grid5--35', 'grid5--36', 'grid5--37', 'grid5--38', 'grid6--1', 'grid6--2', 'grid6--3', 'grid6--4', 'grid6--5', 'grid6--6', 'grid6--7', 'grid6--8', 'grid6--9', 'grid6--10', 'grid6--11', 'grid6--12', 'grid6--13', 'grid6--14', 'grid6--15', 'grid6--16', 'grid6--17', 'grid6--18', 'grid6--19', 'grid6--20', 'grid6--21', 'grid6--22', 'grid6--23', 'grid6--24', 'grid6--25', 'grid6--26', 'grid6--27', 'grid6--28', 'grid6--29', 'grid6--30', 'grid6--31', 'grid6--32', 'grid6--33', 'grid6--34', 'grid6--35', 'grid6--36', 'grid6--37', 'grid6--38', 'grid7--1', 'grid7--2', 'grid7--3', 'grid7--4', 'grid7--5', 'grid7--6', 'grid7--7', 'grid7--8', 'grid7--9', 'grid7--10', 'grid7--11', 'grid7--12', 'grid7--13', 'grid7--14', 'grid7--15', 'grid7--16', 'grid7--17', 'grid7--18', 'grid7--19', 'grid7--20', 'grid7--21', 'grid7--22', 'grid7--23', 'grid7--24', 'grid7--25', 'grid7--26', 'grid7--27', 'grid7--28', 'grid7--29', 'grid7--30', 'grid7--31', 'grid7--32', 'grid7--33', 'grid7--34', 'grid7--35', 'grid7--36', 'grid7--37', 'grid7--38', 'grid8--1', 'grid8--2', 'grid8--3', 'grid8--4', 'grid8--5', 'grid8--6', 'grid8--7', 'grid8--8', 'grid8--9', 'grid8--10', 'grid8--11', 'grid8--12', 'grid8--13', 'grid8--14', 'grid8--15', 'grid8--16', 'grid8--17', 'grid8--18', 'grid8--19', 'grid8--20', 'grid8--21', 'grid8--22', 'grid8--23', 'grid8--24', 'grid8--25', 'grid8--26', 'grid8--27', 'grid8--28', 'grid8--29', 'grid8--30', 'grid8--31', 'grid8--32', 'grid8--33', 'grid8--34', 'grid8--35', 'grid8--36', 'grid8--37', 'grid8--38', 'grid9--1', 'grid9--2', 'grid9--3', 'grid9--4', 'grid9--5', 'grid9--6', 'grid9--7', 'grid9--8', 'grid9--9', 'grid9--10', 'grid9--11', 'grid9--12', 'grid9--13', 'grid9--14', 'grid9--15', 'grid9--16', 'grid9--17', 'grid9--18', 'grid9--19', 'grid9--20', 'grid9--21', 'grid9--22', 'grid9--23', 'grid9--24', 'grid9--25', 'grid9--26', 'grid9--27', 'grid9--28', 'grid9--29', 'grid9--30', 'grid9--31', 'grid9--32', 'grid9--33', 'grid9--34', 'grid9--35', 'grid9--36', 'grid9--37', 'grid9--38', 'grid10--1', 'grid10--2', 'grid10--3', 'grid10--4', 'grid10--5', 'grid10--6', 'grid10--7', 'grid10--8', 'grid10--9', 'grid10--10', 'grid10--11', 'grid10--12', 'grid10--13', 'grid10--14', 'grid10--15', 'grid10--16', 'grid10--17', 'grid10--18', 'grid10--19', 'grid10--20', 'grid10--21', 'grid10--22', 'grid10--23', 'grid10--24', 'grid10--25', 'grid10--26', 'grid10--27', 'grid10--28', 'grid10--29', 'grid10--30', 'grid10--31', 'grid10--32', 'grid10--33', 'grid10--34', 'grid10--35', 'grid10--36', 'grid10--37', 'grid10--38', 'grid11--1', 'grid11--2', 'grid11--3', 'grid11--4', 'grid11--5', 'grid11--6', 'grid11--7', 'grid11--8', 'grid11--9', 'grid11--10', 'grid11--11', 'grid11--12', 'grid11--13', 'grid11--14', 'grid11--15', 'grid11--16', 'grid11--17', 'grid11--18', 'grid11--19', 'grid11--20', 'grid11--21', 'grid11--22', 'grid11--23', 'grid11--24', 'grid11--25', 'grid11--26', 'grid11--27', 'grid11--28', 'grid11--29', 'grid11--30', 'grid11--31', 'grid11--32', 'grid11--33', 'grid11--34', 'grid11--35', 'grid11--36', 'grid11--37', 'grid11--38', 'grid12--1', 'grid12--2', 'grid12--3', 'grid12--4', 'grid12--5', 'grid12--6', 'grid12--7', 'grid12--8', 'grid12--9', 'grid12--10', 'grid12--11', 'grid12--12', 'grid12--13', 'grid12--14', 'grid12--15', 'grid12--16', 'grid12--17', 'grid12--18', 'grid12--19', 'grid12--20', 'grid12--21', 'grid12--22', 'grid12--23', 'grid12--24', 'grid12--25', 'grid12--26', 'grid12--27', 'grid12--28', 'grid12--29', 'grid12--30', 'grid12--31', 'grid12--32', 'grid12--33', 'grid12--34', 'grid12--35', 'grid12--36', 'grid12--37', 'grid12--38', 'grid13--1', 'grid13--2', 'grid13--3', 'grid13--4', 'grid13--5', 'grid13--6', 'grid13--7', 'grid13--8', 'grid13--9', 'grid13--10', 'grid13--11', 'grid13--12', 'grid13--13', 'grid13--14', 'grid13--15', 'grid13--16', 'grid13--17', 'grid13--18', 'grid13--19', 'grid13--20', 'grid13--21', 'grid13--22', 'grid13--23', 'grid13--24', 'grid13--25', 'grid13--26', 'grid13--27', 'grid13--28', 'grid13--29', 'grid13--30', 'grid13--31', 'grid13--32', 'grid13--33', 'grid13--34', 'grid13--35', 'grid13--36', 'grid13--37', 'grid13--38', 'grid14--1', 'grid14--2', 'grid14--3', 'grid14--4', 'grid14--5', 'grid14--6', 'grid14--7', 'grid14--8', 'grid14--9', 'grid14--10', 'grid14--11', 'grid14--12', 'grid14--13', 'grid14--14', 'grid14--15', 'grid14--16', 'grid14--17', 'grid14--18', 'grid14--19', 'grid14--20', 'grid14--21', 'grid14--22', 'grid14--23', 'grid14--24', 'grid14--25', 'grid14--26', 'grid14--27', 'grid14--28', 'grid14--29', 'grid14--30', 'grid14--31', 'grid14--32', 'grid14--33', 'grid14--34', 'grid14--35', 'grid14--36', 'grid14--37', 'grid14--38', 'grid15--1', 'grid15--2', 'grid15--3', 'grid15--4', 'grid15--5', 'grid15--6', 'grid15--7', 'grid15--8', 'grid15--9', 'grid15--10', 'grid15--11', 'grid15--12', 'grid15--13', 'grid15--14', 'grid15--15', 'grid15--16', 'grid15--17', 'grid15--18', 'grid15--19', 'grid15--20', 'grid15--21', 'grid15--22', 'grid15--23', 'grid15--24', 'grid15--25', 'grid15--26', 'grid15--27', 'grid15--28', 'grid15--29', 'grid15--30', 'grid15--31', 'grid15--32', 'grid15--33', 'grid15--34', 'grid15--35', 'grid15--36', 'grid15--37', 'grid15--38', 'grid16--1', 'grid16--2', 'grid16--3', 'grid16--4', 'grid16--5', 'grid16--6', 'grid16--7', 'grid16--8', 'grid16--9', 'grid16--10', 'grid16--11', 'grid16--12', 'grid16--13', 'grid16--14', 'grid16--15', 'grid16--16', 'grid16--17', 'grid16--18', 'grid16--19', 'grid16--20', 'grid16--21', 'grid16--22', 'grid16--23', 'grid16--24', 'grid16--25', 'grid16--26', 'grid16--27', 'grid16--28', 'grid16--29', 'grid16--30', 'grid16--31', 'grid16--32', 'grid16--33', 'grid16--34', 'grid16--35', 'grid16--36', 'grid16--37', 'grid16--38', 'grid17--1', 'grid17--2', 'grid17--3', 'grid17--4', 'grid17--5', 'grid17--6', 'grid17--7', 'grid17--8', 'grid17--9', 'grid17--10', 'grid17--11', 'grid17--12', 'grid17--13', 'grid17--14', 'grid17--15', 'grid17--16', 'grid17--17', 'grid17--18', 'grid17--19', 'grid17--20', 'grid17--21', 'grid17--22', 'grid17--23', 'grid17--24', 'grid17--25', 'grid17--26', 'grid17--27', 'grid17--28', 'grid17--29', 'grid17--30', 'grid17--31', 'grid17--32', 'grid17--33', 'grid17--34', 'grid17--35', 'grid17--36', 'grid17--37', 'grid17--38'];
//it is entire screene exept our chin
let appl = ['grid1--2', 'grid1--3', 'grid1--4', 'grid1--5', 'grid1--6', 'grid1--7', 'grid1--8', 'grid1--9', 'grid1--10', 'grid1--11', 'grid1--12', 'grid1--13', 'grid1--14', 'grid1--15', 'grid1--16', 'grid1--17', 'grid1--18', 'grid1--19', 'grid1--20', 'grid1--21', 'grid1--22', 'grid1--23', 'grid1--24', 'grid1--25', 'grid1--26', 'grid1--27', 'grid1--28', 'grid1--29', 'grid1--30', 'grid1--31', 'grid1--32', 'grid1--33', 'grid1--34', 'grid1--35', 'grid1--36', 'grid1--37', 'grid2--2', 'grid2--3', 'grid2--4', 'grid2--5', 'grid2--6', 'grid2--7', 'grid2--8', 'grid2--9', 'grid2--10', 'grid2--11', 'grid2--12', 'grid2--13', 'grid2--14', 'grid2--15', 'grid2--16', 'grid2--17', 'grid2--18', 'grid2--19', 'grid2--20', 'grid2--21', 'grid2--22', 'grid2--23', 'grid2--24', 'grid2--25', 'grid2--26', 'grid2--27', 'grid2--28', 'grid2--29', 'grid2--30', 'grid2--31', 'grid2--32', 'grid2--33', 'grid2--34', 'grid2--35', 'grid2--36', 'grid2--37', 'grid3--2', 'grid3--3', 'grid3--4', 'grid3--5', 'grid3--6', 'grid3--7', 'grid3--8', 'grid3--9', 'grid3--10', 'grid3--11', 'grid3--12', 'grid3--13', 'grid3--14', 'grid3--15', 'grid3--16', 'grid3--17', 'grid3--18', 'grid3--19', 'grid3--20', 'grid3--21', 'grid3--22', 'grid3--23', 'grid3--24', 'grid3--25', 'grid3--26', 'grid3--27', 'grid3--28', 'grid3--29', 'grid3--30', 'grid3--31', 'grid3--32', 'grid3--33', 'grid3--34', 'grid3--35', 'grid3--36', 'grid3--37', 'grid4--2', 'grid4--3', 'grid4--4', 'grid4--5', 'grid4--6', 'grid4--7', 'grid4--8', 'grid4--9', 'grid4--10', 'grid4--11', 'grid4--12', 'grid4--13', 'grid4--14', 'grid4--15', 'grid4--16', 'grid4--17', 'grid4--18', 'grid4--19', 'grid4--20', 'grid4--21', 'grid4--22', 'grid4--23', 'grid4--24', 'grid4--25', 'grid4--26', 'grid4--27', 'grid4--28', 'grid4--29', 'grid4--30', 'grid4--31', 'grid4--32', 'grid4--33', 'grid4--34', 'grid4--35', 'grid4--36', 'grid4--37', 'grid5--2', 'grid5--3', 'grid5--4', 'grid5--5', 'grid5--6', 'grid5--7', 'grid5--8', 'grid5--9', 'grid5--10', 'grid5--11', 'grid5--12', 'grid5--13', 'grid5--14', 'grid5--15', 'grid5--16', 'grid5--17', 'grid5--18', 'grid5--19', 'grid5--20', 'grid5--21', 'grid5--22', 'grid5--23', 'grid5--24', 'grid5--25', 'grid5--26', 'grid5--27', 'grid5--28', 'grid5--29', 'grid5--30', 'grid5--31', 'grid5--32', 'grid5--33', 'grid5--34', 'grid5--35', 'grid5--36', 'grid5--37', 'grid6--2', 'grid6--3', 'grid6--4', 'grid6--5', 'grid6--6', 'grid6--7', 'grid6--8', 'grid6--9', 'grid6--10', 'grid6--11', 'grid6--12', 'grid6--13', 'grid6--14', 'grid6--15', 'grid6--16', 'grid6--17', 'grid6--18', 'grid6--19', 'grid6--20', 'grid6--21', 'grid6--22', 'grid6--23', 'grid6--24', 'grid6--25', 'grid6--26', 'grid6--27', 'grid6--28', 'grid6--29', 'grid6--30', 'grid6--31', 'grid6--32', 'grid6--33', 'grid6--34', 'grid6--35', 'grid6--36', 'grid6--37', 'grid7--2', 'grid7--3', 'grid7--4', 'grid7--5', 'grid7--6', 'grid7--7', 'grid7--8', 'grid7--9', 'grid7--10', 'grid7--11', 'grid7--12', 'grid7--13', 'grid7--14', 'grid7--15', 'grid7--16', 'grid7--17', 'grid7--18', 'grid7--19', 'grid7--20', 'grid7--21', 'grid7--22', 'grid7--23', 'grid7--24', 'grid7--25', 'grid7--26', 'grid7--27', 'grid7--28', 'grid7--29', 'grid7--30', 'grid7--31', 'grid7--32', 'grid7--33', 'grid7--34', 'grid7--35', 'grid7--36', 'grid7--37', 'grid8--2', 'grid8--3', 'grid8--4', 'grid8--5', 'grid8--6', 'grid8--7', 'grid8--8', 'grid8--9', 'grid8--10', 'grid8--11', 'grid8--12', 'grid8--13', 'grid8--14', 'grid8--15', 'grid8--16', 'grid8--17', 'grid8--18', 'grid8--19', 'grid8--20', 'grid8--21', 'grid8--22', 'grid8--23', 'grid8--24', 'grid8--25', 'grid8--26', 'grid8--27', 'grid8--28', 'grid8--29', 'grid8--30', 'grid8--31', 'grid8--32', 'grid8--33', 'grid8--34', 'grid8--35', 'grid8--36', 'grid8--37', 'grid9--2', 'grid9--3', 'grid9--4', 'grid9--5', 'grid9--6', 'grid9--7', 'grid9--8', 'grid9--9', 'grid9--10', 'grid9--11', 'grid9--12', 'grid9--13', 'grid9--14', 'grid9--15', 'grid9--16', 'grid9--17', 'grid9--18', 'grid9--19', 'grid9--20', 'grid9--21', 'grid9--22', 'grid9--23', 'grid9--24', 'grid9--25', 'grid9--26', 'grid9--27', 'grid9--28', 'grid9--29', 'grid9--30', 'grid9--31', 'grid9--32', 'grid9--33', 'grid9--34', 'grid9--35', 'grid9--36', 'grid9--37', 'grid10--2', 'grid10--3', 'grid10--4', 'grid10--5', 'grid10--6', 'grid10--7', 'grid10--8', 'grid10--9', 'grid10--10', 'grid10--11', 'grid10--12', 'grid10--13', 'grid10--14', 'grid10--15', 'grid10--16', 'grid10--17', 'grid10--18', 'grid10--19', 'grid10--20', 'grid10--21', 'grid10--22', 'grid10--23', 'grid10--24', 'grid10--25', 'grid10--26', 'grid10--27', 'grid10--28', 'grid10--29', 'grid10--30', 'grid10--31', 'grid10--32', 'grid10--33', 'grid10--34', 'grid10--35', 'grid10--36', 'grid10--37', 'grid11--2', 'grid11--3', 'grid11--4', 'grid11--5', 'grid11--6', 'grid11--7', 'grid11--8', 'grid11--9', 'grid11--10', 'grid11--11', 'grid11--12', 'grid11--13', 'grid11--14', 'grid11--15', 'grid11--16', 'grid11--17', 'grid11--18', 'grid11--19', 'grid11--20', 'grid11--21', 'grid11--22', 'grid11--23', 'grid11--24', 'grid11--25', 'grid11--26', 'grid11--27', 'grid11--28', 'grid11--29', 'grid11--30', 'grid11--31', 'grid11--32', 'grid11--33', 'grid11--34', 'grid11--35', 'grid11--36', 'grid11--37', 'grid12--2', 'grid12--3', 'grid12--4', 'grid12--5', 'grid12--6', 'grid12--7', 'grid12--8', 'grid12--9', 'grid12--10', 'grid12--11', 'grid12--12', 'grid12--13', 'grid12--14', 'grid12--15', 'grid12--16', 'grid12--17', 'grid12--18', 'grid12--19', 'grid12--20', 'grid12--21', 'grid12--22', 'grid12--23', 'grid12--24', 'grid12--25', 'grid12--26', 'grid12--27', 'grid12--28', 'grid12--29', 'grid12--30', 'grid12--31', 'grid12--32', 'grid12--33', 'grid12--34', 'grid12--35', 'grid12--36', 'grid12--37', 'grid13--2', 'grid13--3', 'grid13--4', 'grid13--5', 'grid13--6', 'grid13--7', 'grid13--8', 'grid13--9', 'grid13--10', 'grid13--11', 'grid13--12', 'grid13--13', 'grid13--14', 'grid13--15', 'grid13--16', 'grid13--17', 'grid13--18', 'grid13--19', 'grid13--20', 'grid13--21', 'grid13--22', 'grid13--23', 'grid13--24', 'grid13--25', 'grid13--26', 'grid13--27', 'grid13--28', 'grid13--29', 'grid13--30', 'grid13--31', 'grid13--32', 'grid13--33', 'grid13--34', 'grid13--35', 'grid13--36', 'grid13--37', 'grid14--2', 'grid14--3', 'grid14--4', 'grid14--5', 'grid14--6', 'grid14--7', 'grid14--8', 'grid14--9', 'grid14--10', 'grid14--11', 'grid14--12', 'grid14--13', 'grid14--14', 'grid14--15', 'grid14--16', 'grid14--17', 'grid14--18', 'grid14--19', 'grid14--20', 'grid14--21', 'grid14--22', 'grid14--23', 'grid14--24', 'grid14--25', 'grid14--26', 'grid14--27', 'grid14--28', 'grid14--29', 'grid14--30', 'grid14--31', 'grid14--32', 'grid14--33', 'grid14--34', 'grid14--35', 'grid14--36', 'grid14--37', 'grid15--2', 'grid15--3', 'grid15--4', 'grid15--5', 'grid15--6', 'grid15--7', 'grid15--8', 'grid15--9', 'grid15--10', 'grid15--11', 'grid15--12', 'grid15--13', 'grid15--14', 'grid15--15', 'grid15--16', 'grid15--17', 'grid15--18', 'grid15--19', 'grid15--20', 'grid15--21', 'grid15--22', 'grid15--23', 'grid15--24', 'grid15--25', 'grid15--26', 'grid15--27', 'grid15--28', 'grid15--29', 'grid15--30', 'grid15--31', 'grid15--32', 'grid15--33', 'grid15--34', 'grid15--35', 'grid15--36', 'grid15--37', 'grid16--2', 'grid16--3', 'grid16--4', 'grid16--5', 'grid16--6', 'grid16--7', 'grid16--8', 'grid16--9', 'grid16--10', 'grid16--11', 'grid16--12', 'grid16--13', 'grid16--14', 'grid16--15', 'grid16--16', 'grid16--17', 'grid16--18', 'grid16--19', 'grid16--20', 'grid16--21', 'grid16--22', 'grid16--23', 'grid16--24', 'grid16--25', 'grid16--26', 'grid16--27', 'grid16--28', 'grid16--29', 'grid16--30', 'grid16--31', 'grid16--32', 'grid16--33', 'grid16--34', 'grid16--35', 'grid16--36', 'grid16--37'] ;
//its the apple
let app = 0;
let appi = 0;
//generation
let px,py;
//why do you think it is used for
let n = 0;
let li = ['grid4--7', 'grid4--8', 'grid4--9', 'grid4--10', 'grid5--6', 'grid6--6', 'grid7--6', 'grid8--6', 'grid8--7', 'grid8--8', 'grid8--9', 'grid8--10', 'grid9--10', 'grid10--10', 'grid11--10', 'grid12--9', 'grid12--8', 'grid12--7', 'grid12--6', 'grid4--12', 'grid4--13', 'grid4--14', 'grid4--15', 'grid4--16', 'grid5--14', 'grid6--14', 'grid7--14', 'grid8--14', 'grid9--14', 'grid10--14', 'grid11--14', 'grid12--14', 'grid12--18', 'grid11--18', 'grid10--18', 'grid9--18', 'grid8--18', 'grid4--20', 'grid5--19', 'grid6--18', 'grid7--18', 'grid5--21', 'grid6--22', 'grid7--22', 'grid8--22', 'grid9--22', 'grid10--22', 'grid11--22', 'grid12--22', 'grid8--21', 'grid8--20', 'grid8--19', 'grid4--24', 'grid5--24', 'grid6--24', 'grid6--24', 'grid7--24', 'grid8--24', 'grid9--24', 'grid10--24', 'grid11--24', 'grid12--24', 'grid4--25', 'grid4--26', 'grid4--27', 'grid5--28', 'grid6--28', 'grid7--28', 'grid8--25', 'grid8--26', 'grid8--27', 'grid9--25', 'grid10--26', 'grid11--27', 'grid12--28', 'grid4--30', 'grid4--31', 'grid4--32', 'grid4--33', 'grid4--34', 'grid5--32', 'grid6--32', 'grid7--32', 'grid8--32', 'grid9--32', 'grid10--32', 'grid11--32', 'grid12--32'] 
let boun = ['grid0--1', 'grid17--1', 'grid0--2', 'grid17--2', 'grid0--3', 'grid17--3', 'grid0--4', 'grid17--4', 'grid0--5', 'grid17--5', 'grid0--6', 'grid17--6', 'grid0--7', 'grid17--7', 'grid0--8', 'grid17--8', 'grid0--9', 'grid17--9', 'grid0--10', 'grid17--10', 'grid0--11', 'grid17--11', 'grid0--12', 'grid17--12', 'grid0--13', 'grid17--13', 'grid0--14', 'grid17--14', 'grid0--15', 'grid17--15', 'grid0--16', 'grid17--16', 'grid0--17', 'grid17--17', 'grid0--18', 'grid17--18', 'grid0--19', 'grid17--19', 'grid0--20', 'grid17--20', 'grid0--21', 'grid17--21', 'grid0--22', 'grid17--22', 'grid0--23', 'grid17--23', 'grid0--24', 'grid17--24', 'grid0--25', 'grid17--25', 'grid0--26', 'grid17--26', 'grid0--27', 'grid17--27', 'grid0--28', 'grid17--28', 'grid0--29', 'grid17--29', 'grid0--30', 'grid17--30', 'grid0--31', 'grid17--31', 'grid0--32', 'grid17--32', 'grid0--33', 'grid17--33', 'grid0--34', 'grid17--34', 'grid0--35', 'grid17--35', 'grid0--36', 'grid17--36', 'grid0--37', 'grid17--37', 'grid0--38', 'grid17--38', 'grid1--1', 'grid2--1', 'grid3--1', 'grid4--1', 'grid5--1', 'grid6--1', 'grid7--1', 'grid8--1', 'grid9--1', 'grid10--1', 'grid11--1', 'grid12--1', 'grid13--1', 'grid14--1', 'grid15--1', 'grid16--1', 'grid1--38', 'grid2--38', 'grid3--38', 'grid4--38', 'grid5--38', 'grid6--38', 'grid7--38', 'grid8--38', 'grid9--38', 'grid10--38', 'grid11--38', 'grid12--38', 'grid13--38', 'grid14--38', 'grid15--38', 'grid16--38'];
//it ignite start
function main(e) {
    e = e || window.event;
    if (e.keyCode == '13') {
        nfo('Use arrow keys to turn direction');
        start();
        }
}
function start() {

    //start dissapear
    for (let i = 0; i < li.length; i++) {
        let a = li[i];
        document.getElementById(a).style.background = 'transparent';
        document.getElementById(a).style.animation = 'none';
    }
 

    //chin create

    document.getElementById('grid5--10').style.background = 'white';
    document.getElementById('grid5--10').style.border = '1px solid black';
    document.getElementById('grid5--11').style.background = 'white';
    document.getElementById('grid5--11').style.border = '1px solid black';
    document.getElementById('grid5--12').style.background = mcol;
    document.getElementById('grid5--12').style.border = '1px solid black';


    for (let i = 0; i < boun.length; i++) {
        const ele = boun[i];
        document.getElementById(ele).style.background = 'rgb(17, 116, 25)';
        document.getElementById(ele).style.border = '1px solid black';
    }

    nowmove();

    //move fast and break things unless you are breaking stuff you are not moving fast enough
}
//info man info
function nfo(txt) {
    document.getElementById('txinfo').innerHTML = txt;
    
}
//only for mouse onclick
function nfof(txt) {
    document.getElementById('txinfo').innerHTML = txt;
    start();
}
//for fun --(no actually its important to integrate them)
function getmove() {
    get();
    move();
    get();

}
//now move baby
function nowmove() {
    
    //here we move chini
    for (let i = 0; i < 5000; i++) {
        setTimeout(getmove, i * myvar);
        if (profront == 'rgb(17, 116, 25)') {
            break
        }
    }      
}
// I trnaa be indi I tryna be cool 
function indignt(x) {
    let xindi , yindi;
    if (x.length == 8) {
        xindi = x.slice(-1);
        yindi = x.slice(4, 5);
    } else if (x.length == 10) {
        xindi = x.slice(8);
        yindi = x.slice(4, 6);
    }
    else if (x.length == 9) {
        if (x[5] == '-') {
            xindi = x.slice(7);
            yindi = x.slice(4, 5);
        } else if (x[5] !== '-') {
            xindi = x.slice(-1);
            yindi = x.slice(4, 6);
        }
    }
    // x and y cordinates of head
    xindi = Number(xindi);
    yindi = Number(yindi);
    return [xindi, yindi];
}
//get where is chin
function get() {

    for (let i = 0; i < ar.length; i++) {
        const c = ar[i];
        let col = document.getElementById(c).style.background;
        if (col == mcol) {
            pohea = c;
            break;
        }
    }
    //pohea = position of head
    let rli = indignt(pohea);
    xin = rli[0];
    yin = rli[1];
    //pro = property of nearby grids
    if (xin > 1) {
        xi = xin - 1;
        proback = document.getElementById('grid' + yin + '--' + xi).style.background;
    }
    if (xin < 38) {
        xo = xin + 1;
        profront = document.getElementById('grid' + yin + '--' + xo).style.background;
    }
    if (yin > 0) {
        yi = yin - 1;
        protop = document.getElementById('grid' + yi + '--' + xin).style.background;
    }
    if (yin < 17) {
        yo = yin + 1;
        prodown = document.getElementById('grid' + yo + '--' + xin).style.background;
    }
    chin = [];
    chin.push(pohea);

    if (proback == 'white') {
        for (let i = 1; i < 100; i++) {
            let a = xin - i;
            if (a >= 1) {
                let rndprt = 'grid' + yin + '--' + a;
                if (document.getElementById(rndprt).style.background == 'white') {
                    chin.push(rndprt);
                }
                else {
                    chingnt();
                    if (profront == 'red') {
                        document.getElementById('grid' + py + '--' + px).style.background = mcol;
                        document.getElementById(pohea).style.background = 'white';
                    }
                    else if (profront == 'rgb(17, 116, 25)') {
                        document.getElementById(chin[0]).style.background = 'white';
                        document.getElementById(chin[chin.length - 1]).style.background =  mcol;
                    }
                    else if (profront == 'rebeccapurple') {
                        end();
                    }
                    break
                }
            }
        }
    }

    else if (profront == 'white') {
        for (let i = 1; i < 100; i++) {
            let a = xin + i;
            if (a <= 38) {
                rndprt = 'grid' + yin + '--' + a;
                if (document.getElementById(rndprt).style.background == 'white') {
                    chin.push(rndprt);
                }
                else {
                    chingnt();
                    if (proback == 'red') {
                        document.getElementById('grid' + py + '--' + px).style.background = mcol;
                        document.getElementById(pohea).style.background = 'white';
                    }
                    else if (proback == 'rgb(17, 116, 25)') {
                        document.getElementById(chin[0]).style.background = 'white';
                        document.getElementById(chin[chin.length - 1]).style.background = mcol;
                    }
                    else if (proback == 'rebeccapurple') {
                        end();
                    }
                    break
                }
            }
        }
    }
    else if (protop == 'white') {
        for (let i = 1; i < 100; i++) {
            let a = yin - i;
            if (a >= 0) {
                rndprt = 'grid' + a + '--' + xin;
                if (document.getElementById(rndprt).style.background == 'white') {
                    chin.push(rndprt);
                }
                else {
                    chingnt();
                    if (prodown == 'red') {
                        document.getElementById('grid' + py + '--' + px).style.background = mcol;
                        document.getElementById(pohea).style.background = 'white';
                    }
                    else if (prodown == 'rgb(17, 116, 25)') {
                        document.getElementById(chin[0]).style.background = 'white';
                        document.getElementById(chin[chin.length - 1]).style.background = mcol;
                    }
                    else if (prodown == 'rebeccapurple') {
                        end();
                    }
                    break
                }
            }
        }
    }
    else if (prodown == 'white') {
        for (let i = 1; i < 100; i++) {
            let a = yin + i;
            if (a <= 17) {
                rndprt = 'grid' + a + '--' + xin;
                if (document.getElementById(rndprt).style.background == 'white') {
                    chin.push(rndprt);
                }
                else {
                    chingnt();
                    if (protop == 'red') {
                        document.getElementById('grid' + py + '--' + px).style.background = mcol;
                        document.getElementById(pohea).style.background = 'white';
                    }
                    else if (protop == 'rgb(17, 116, 25)') {
                        document.getElementById(chin[0]).style.background = 'white';
                        document.getElementById(chin[chin.length - 1]).style.background = mcol;
                    }
                    else if (protop == 'rebeccapurple') {
                        end();
                    }
                    break
                }
            }
        }
    }
    else{}
 
    document.getElementById('body').setAttribute('onkeydown', 'turn()');
    
    apple();
    
     
}
//this drive chin
function move() {
    potai = chin[chin.length - 1];
    if (proback == 'white') {
        document.getElementById(potai).style.transition = '.01s';
        document.getElementById(potai).style.border = '1px solid black';
        document.getElementById(potai).style.background = 'transparent';
        document.getElementById('grid' + yin + '--' + xo).style.transition = '.01s';
        document.getElementById('grid' + yin + '--' + xo).style.border = '1px solid black';
        document.getElementById('grid' + yin + '--' + xo).style.background = mcol;
        document.getElementById(pohea).style.transition = '.01s';
        document.getElementById(pohea).style.border = '1px solid black';
        document.getElementById(pohea).style.background = 'white';

    }
    else if (profront == 'white') {
        document.getElementById(potai).style.transition = '.01s';
        document.getElementById(potai).style.border = '1px solid black';
        document.getElementById(potai).style.background = 'transparent';
        document.getElementById('grid' + yin + '--' + xi).style.transition = '.01s';
        document.getElementById('grid' + yin + '--' + xi).style.border = '1px solid black';
        document.getElementById('grid' + yin + '--' + xi).style.background = mcol;
        document.getElementById(pohea).style.transition = '.01s';
        document.getElementById(pohea).style.border = '1px solid black';
        document.getElementById(pohea).style.background = 'white';
    }
    else if (protop == 'white') {
        document.getElementById(potai).style.transition = '.01s';
        document.getElementById(potai).style.border = '1px solid black';
        document.getElementById(potai).style.background = 'transparent';
        document.getElementById('grid' + yo + '--' + xin).style.transition = '.01s';
        document.getElementById('grid' + yo + '--' + xin).style.border = '1px solid black';
        document.getElementById('grid' + yo + '--' + xin).style.background = mcol;
        document.getElementById(pohea).style.transition = '.01s';
        document.getElementById(pohea).style.border = '1px solid black';
        document.getElementById(pohea).style.background = 'white';
    }
    else if (prodown == 'white') {
        document.getElementById(potai).style.transition = '.01s';
        document.getElementById(potai).style.border = '1px solid black';
        document.getElementById(potai).style.background = 'transparent';
        document.getElementById('grid' + yi + '--' + xin).style.transition = '.01s';
        document.getElementById('grid' + yi + '--' + xin).style.border = '1px solid black';
        document.getElementById('grid' + yi + '--' + xin).style.background = mcol;
        document.getElementById(pohea).style.transition = '.01s';
        document.getElementById(pohea).style.border = '1px solid black';
        document.getElementById(pohea).style.background = 'white';
    }
}  
// pawa ka la la la la oppo reno 
function chingnt() {
    while (true) {
        chu = chin[chin.length - 1];
        shu = chin[chin.length - 2];
        let rli = indignt(chu);
        chuxin = rli[0];
        chuyin = rli[1];
        rli = indignt(shu);
        shuxin = rli[0];
        shuyin = rli[1];
        if (chuxin == shuxin) {
            if (chuyin > shuyin) {
                let rn1 = chuyin + 1;//
                let rn2 = chuxin + 1;
                let rn3 = chuxin - 1;

                if (document.getElementById('grid' + rn1 + '--' + chuxin).style.background == 'white') {
                    chin.push('grid' + rn1 + '--' + chuxin);
                }
                else if (document.getElementById('grid' + chuyin + '--' + rn2).style.background == 'white' && document.getElementById('grid' + chuyin + '--' + rn3).style.background == 'white') {
                    let bu = chin.includes('grid' + chuyin + '--' + rn2);
                    let bi = chin.includes('grid' + chuyin + '--' + rn3);
                    if (bu == 'true') {
                        chin.push('grid' + chuyin + '--' + rn3)
                    }
                    else if (bi == 'true') {
                        chin.push('grid' + chuyin + '--' + rn2)
                    }
                    else {
                        break
                    }
                }
                else if (document.getElementById('grid' + chuyin + '--' + rn2).style.background == 'white') {
                    chin.push('grid' + chuyin + '--' + rn2);
                }
                else if (document.getElementById('grid' + chuyin + '--' + rn3).style.background == 'white') {
                    chin.push('grid' + chuyin + '--' + rn3);
                }
                else {
                    break
                }
            }
            else if (chuyin < shuyin) {
                let rn1 = chuyin - 1;
                let rn2 = chuxin + 1;
                let rn3 = chuxin - 1;
                if (document.getElementById('grid' + rn1 + '--' + chuxin).style.background == 'white') {
                    chin.push('grid' + rn1 + '--' + chuxin);
                }
                else if (document.getElementById('grid' + chuyin + '--' + rn2).style.background == 'white' && document.getElementById('grid' + chuyin + '--' + rn3).style.background == 'white') {
                    let bu = chin.includes('grid' + chuyin + '--' + rn2);
                    let bi = chin.includes('grid' + chuyin + '--' + rn3);
                    if (bu == 'true') {
                        chin.push('grid' + chuyin + '--' + rn3)
                    }
                    else if (bi == 'true') {
                        chin.push('grid' + chuyin + '--' + rn2)
                    }
                    else {
                        break
                    }
                }
                else if (document.getElementById('grid' + chuyin + '--' + rn2).style.background == 'white') {
                    chin.push('grid' + chuyin + '--' + rn2);
                }
                else if (document.getElementById('grid' + chuyin + '--' + rn3).style.background == 'white') {
                    chin.push('grid' + chuyin + '--' + rn3);
                }
                else {
                    break
                }
            }
            else {
                break
            }
        }
        else if (chuyin == shuyin) {
            if (chuxin > shuxin) {
                let r1 = chuxin + 1;
                let r2 = chuyin + 1;
                let r3 = chuyin - 1;
                if (document.getElementById('grid' + chuyin + '--' + r1).style.background == 'white') {
                    chin.push('grid' + chuyin + '--' + r1)
                }
                else if (document.getElementById('grid' + r2 + '--' + chuxin).style.background == 'white' && document.getElementById('grid' + r3 + '--' + chuxin).style.background == 'white') {
                    let bu = chin.includes('grid' + r2 + '--' + chuxin);
                    let bi = chin.includes('grid' + r3 + '--' + chuxin);
                    if (bu == 'true') {
                        chin.push('grid' + r3 + '--' + chuxin)
                    }
                    else if (bi == 'true') {
                        chin.push('grid' + r2 + '--' + chuxin)
                    }
                    else {
                        break
                    }
                }
                else if (document.getElementById('grid' + r2 + '--' + chuxin).style.background == 'white') {
                    chin.push('grid' + r2 + '--' + chuxin)
                }
                else if (document.getElementById('grid' + r3 + '--' + chuxin).style.background == 'white') {
                    chin.push('grid' + r3 + '--' + chuxin)
                }
                else {
                    break
                }
            }
            else if (chuxin < shuxin) {
                let r1 = chuxin - 1;
                let r2 = chuyin + 1;
                let r3 = chuyin - 1;
                if (document.getElementById('grid' + chuyin + '--' + r1).style.background == 'white') {
                    chin.push('grid' + chuyin + '--' + r1)
                }
                else if (document.getElementById('grid' + r2 + '--' + chuxin).style.background == 'white' && document.getElementById('grid' + r3 + '--' + chuxin).style.background == 'white') {
                    let bu = chin.includes('grid' + r2 + '--' + chuxin);
                    let bi = chin.includes('grid' + r3 + '--' + chuxin);
                    if (bu == 'true') {
                        chin.push('grid' + r3 + '--' + chuxin)
                    }
                    else if (bi == 'true') {
                        chin.push('grid' + r2 + '--' + chuxin)
                    }
                    else {
                        break
                    }
                }
                else if (document.getElementById('grid' + r2 + '--' + chuxin).style.background == 'white') {
                    chin.push('grid' + r2 + '--' + chuxin)
                }
                else if (document.getElementById('grid' + r3 + '--' + chuxin).style.background == 'white') {
                    chin.push('grid' + r3 + '--' + chuxin)
                }
                else {
                    break
                }
            }
            else {
                break
            }
        }
        else {
            break
        }
    }
}
// turns chin
function turn(f) {
    if (n == 0 ||n==1||n==2||n==3||n==4||n==5) {
        nfo('Eat the red and Avoid the purple');
        n= n+1;
    }
    else{
        nfo('');
    }
    f = f || window.event;
    if (f.keyCode == '38') {
        // up arrow
        if (proback == 'white') {
 
            if (protop == 'red') {
                document.getElementById(pohea).style.background = 'white';
                document.getElementById(pohea).style.border = '1px solid black';
                document.getElementById('grid' + yi + '--' + xin).style.background = mcol;
                document.getElementById('grid' + yi + '--' + xin).style.border = '1px solid black';
            }
            else{
                document.getElementById(pohea).style.background = 'white';
                document.getElementById(pohea).style.border = '1px solid black';
                document.getElementById('grid' + yi + '--' + xin).style.background = mcol;
                document.getElementById('grid' + yi + '--' + xin).style.border = '1px solid black';
                document.getElementById(chu).style.background = 'transparent';
                document.getElementById(chu).style.border = '1px solid black';
            }
            
        }
        else if (profront == 'white') {

            if (protop == 'red') {
                document.getElementById(pohea).style.background = 'white';
                document.getElementById(pohea).style.border = '1px solid black';
                document.getElementById('grid' + yi + '--' + xin).style.background = mcol;
                document.getElementById('grid' + yi + '--' + xin).style.border = '1px solid black';
            }
            else{
                document.getElementById(pohea).style.background = 'white';
                document.getElementById(pohea).style.border = '1px solid black';
                document.getElementById('grid' + yi + '--' + xin).style.background = mcol;
                document.getElementById('grid' + yi + '--' + xin).style.border = '1px solid black';
                document.getElementById(chu).style.background = 'transparent';
                document.getElementById(chu).style.border = '1px solid black';
            }
        }
        else if (protop == 'white') {
            // roko roko
        }
        else if (prodown == 'white') {
            // I felt the need ,The Need for Speed
        }
    }

    else if (f.keyCode == '40') {
        //down arrow
        if (proback == 'white') {
            if (prodown == 'red') {
                document.getElementById(pohea).style.background = 'white';
                document.getElementById(pohea).style.border = '1px solid black';
                document.getElementById('grid' + yo + '--' + xin).style.background = mcol;
                document.getElementById('grid' + yo + '--' + xin).style.border = '1px solid black';
            }
            else{
                document.getElementById(pohea).style.background = 'white';
                document.getElementById(pohea).style.border = '1px solid black';
                document.getElementById('grid' + yo + '--' + xin).style.background = mcol;
                document.getElementById('grid' + yo + '--' + xin).style.border = '1px solid black';
                document.getElementById(chu).style.background = 'transparent';
                document.getElementById(chu).style.border = '1px solid black';
            }
        }
        else if (profront == 'white') {
            if (prodown == 'red') {
                document.getElementById(pohea).style.background = 'white';
                document.getElementById(pohea).style.border = '1px solid black';
                document.getElementById('grid' + yo + '--' + xin).style.background = mcol;
                document.getElementById('grid' + yo + '--' + xin).style.border = '1px solid black';
            }
            else{
                document.getElementById(pohea).style.background = 'white';
                document.getElementById(pohea).style.border = '1px solid black';
                document.getElementById('grid' + yo + '--' + xin).style.background = mcol;
                document.getElementById('grid' + yo + '--' + xin).style.border = '1px solid black';
                document.getElementById(chu).style.background = 'transparent';
                document.getElementById(chu).style.border = '1px solid black';
            }
        }
        else if (protop == 'white') {
            // I felt the need ,The Need For Speed
        }
        else if (prodown == 'white') {
            // roko roko
        }
    }

    else if (f.keyCode == '37') {
        // left arrow
        if (proback == 'white') {
            // roko roko
        }
        else if (profront == 'white') {
            // I felt the need ,The Need for Speed
        }
        else if (protop == 'white') {
            if (proback == 'red') {
                document.getElementById(pohea).style.background = 'white';
                document.getElementById(pohea).style.border = '1px solid black';
                document.getElementById('grid' + yin + '--' + xi).style.background = mcol;
                document.getElementById('grid' + yin + '--' + xi).style.border = '1px solid black';
            }
            else{
                document.getElementById(pohea).style.background = 'white';
                document.getElementById(pohea).style.border = '1px solid black';
                document.getElementById('grid' + yin + '--' + xi).style.background = mcol;
                document.getElementById('grid' + yin + '--' + xi).style.border = '1px solid black';
                document.getElementById(chu).style.background = 'transparent';
                document.getElementById(chu).style.border = '1px solid black';
            }
        }
        else if (prodown == 'white') {
            if (proback == 'red') {
                document.getElementById(pohea).style.background = 'white';
                document.getElementById(pohea).style.border = '1px solid black';
                document.getElementById('grid' + yin + '--' + xi).style.background = mcol;
                document.getElementById('grid' + yin + '--' + xi).style.border = '1px solid black';
            }
            else{
                document.getElementById(pohea).style.background = 'white';
                document.getElementById(pohea).style.border = '1px solid black';
                document.getElementById('grid' + yin + '--' + xi).style.background = mcol;
                document.getElementById('grid' + yin + '--' + xi).style.border = '1px solid black';
                document.getElementById(chu).style.background = 'transparent';
                document.getElementById(chu).style.border = '1px solid black';
            }
        }
    }
    else if (f.keyCode == '39') {
        // right arrow
        if (proback == 'white') {
            // I felt the need ,The Need for Speed
        }
        else if (profront == 'white') {
            // roko roko
        }
        else if (protop == 'white') {
            if (profront == 'red') {
                document.getElementById(pohea).style.background = 'white';
                document.getElementById(pohea).style.border = '1px solid black';
                document.getElementById('grid' + yin + '--' + xo).style.background = mcol;
                document.getElementById('grid' + yin + '--' + xo).style.border = '1px solid black';
            }
            else{
                document.getElementById(pohea).style.background = 'white';
                document.getElementById(pohea).style.border = '1px solid black';
                document.getElementById('grid' + yin + '--' + xo).style.background = mcol;
                document.getElementById('grid' + yin + '--' + xo).style.border = '1px solid black';
                document.getElementById(chu).style.background = 'transparent';
                document.getElementById(chu).style.border = '1px solid black';
            }
        }
        else if (prodown == 'white') {
            if (profront == 'red') {
                document.getElementById(pohea).style.background = 'white';
                document.getElementById(pohea).style.border = '1px solid black';
                document.getElementById('grid' + yin + '--' + xo).style.background = mcol;
                document.getElementById('grid' + yin + '--' + xo).style.border = '1px solid black';
            }
            else{
                document.getElementById(pohea).style.background = 'white';
                document.getElementById(pohea).style.border = '1px solid black';
                document.getElementById('grid' + yin + '--' + xo).style.background = mcol;
                document.getElementById('grid' + yin + '--' + xo).style.border = '1px solid black';
                document.getElementById(chu).style.background = 'transparent';
                document.getElementById(chu).style.border = '1px solid black';
            }
        }
    }
}
//proper random function
function getrndint(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//this generates apples
function apple() {
    for (let i = 0; i < appl.length; i++) {
        const el = appl[i];
        if (document.getElementById(el).style.background == 'red') {
            break
        }
        else {
            app = app + 1;
        }
    }
    if (app == 576) {
        px = getrndint(2, 38);
        py = getrndint(1, 17);
        document.getElementById('grid' + py + '--' + px).style.background = 'red';
        document.getElementById('grid' + py + '--' + px).style.border = '1px solid black';
        brick();


    }
    app = 0;
}
//this generates bricks
function brick() {
 
    let ox = getrndint(2, 38);
    let oy = getrndint(1, 17);
    document.getElementById('grid' + oy + '--' + ox).style.background = 'rebeccapurple';
 
}
//so this ends the game 
function end() {
    //let score = (chin.length - 3) * 100;
    //let txt = 'GAME OVER Your score was - ' + score
    location.reload();

}
function hasColided(lbullet,lwall)
{
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
    return true
}
 return false;
}
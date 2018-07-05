---
path: "unity-tilemap-and-collision"
date: "2018-07-05T10:15:00.962Z"
title: "Unity, Tilemaps and collision"
---

# Unity, Tilemaps and collision

Tilemaps are a very common technique in 2D development. It's consisting of regrouping level, theme or props in the same regular shaped image. It make building a consistent 2D game world more accessible and faster for the developpers and it also result in a performance and memory gains. 

Since Unity 2017.2, tilemap has finaly became a part of the Unity 2D dev tool. Before this version, you needed to build your own tilemap system or use a third party assets. 

Sadly Unity still need somes times to optimize his tilemap feature since there are few bugs that remains from version to version (tilemap palette don't show off, brush not optimize etc.). 

## Improving collision system 

You are making a 2d platformer just like Super Mario Bros because everybody love Mario games. So you create your little spritesheet and tiles and begin to add it to your since. You create your first tilemap, so unity create a Grid element with a tilemap object.



![image-20180705094050689](./grid-tilemap.png)



Great ! You can now easily create your game world. 



![image-20180705094308623](./game-world.png)



Things look great, now let add a basic collision system but adding a TilemapCollider2D to our tilemap

![image-20180705094544485](./collider-2d.png)



Like you can see, by default, TilemapCollider2D will create a box collider for every tile. It can be a pain in the ass since your character can trip over those colliders. That why you need to add a composite collider and a rigid body. Composite collider will merge every box collider to make a single collider and it need a RigidBody2d to work.



![image-20180705095233105](./composite.png)



And now you got a single collider for your tilemap. 

![image-20180705095410544](./tilemap-merge.png)



But what happens when the collider shape isn't good for a tiles ? Or you want a more complex form ? There already a simple solution for this. You simple edit the physics shapes of your sprite in the sprite editor windows.

![2018-07-05 09.57.50](./physics.gif)



## Conclusion

Unity's tilemap system still need improvement and a better documentation but It can be a great tool. 

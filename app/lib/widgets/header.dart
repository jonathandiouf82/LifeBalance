import 'package:flutter/material.dart';
// ignore: prefer_const_constructors

class Header extends StatelessWidget implements PreferredSizeWidget {
  const Header({super.key});

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  @override
  Widget build(BuildContext context) {
    return Row(
      children: <Widget>[
        CircleAvatar(
          radius: 50,
        ),
        SizedBox(width: 10), // Adding space between elements
        Icon(
          Icons.search,
          color: Colors.black,
          size: 24.0,
          semanticLabel: 'Text to announce in accessibility modes',
        ),
        SizedBox(width: 10), // Adding space between elements
        Icon(
          Icons.notifications,
          color: Colors.black,
          size: 24.0,
          semanticLabel: 'Text to announce in accessibility modes',
        ),
      ],
    );
  }
}

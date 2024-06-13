 @endtoend @linkedlist
 Feature: LinkedList module
 Scenario Outline: User clicks "<topic>" Types of Linked List on linkedlist module
      Given User Clicks "Linked List" module
      Then User is on linkedlist module page 
      When User clicks "<topic>" link
      Then User should land on the "<URL>" page
      When User Clicks Sign Out Link
      Then User Should Successfully Log Out from the application
      #Then Close the browser
 Examples:
     | topic                           | URL                             |
     | Introduction                    | introduction                    |
     | Creating Linked List            | creating-linked-list |
     | Types of Linked List | Types-of-Linked-List |
     | Implement Linked List in Python | implement-linked-list-in-python |
     | Traversal                       | traversal |
     | Insertion                       | insertion-in-linked-list |
     | Deletion                        | deletion-in-linked-list |


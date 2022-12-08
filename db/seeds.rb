puts "Deleting Group/User/Post data..."
User.destroy_all
Group.destroy_all
UsersGroup.destroy_all
Post.destroy_all

puts "👥 Seeding users..."
user1 = User.create(first_name: 'Caitlin', last_name: 'Smith', username: 'csmith', age: 23, password_digest: "a1")
user2 = User.create(first_name: 'Daniel', last_name: 'Jones', username: 'djones', age: 35, password_digest: "b2")
user3 = User.create(first_name: 'Ann', last_name: 'Williams', username: 'awilliams', age: 28, password_digest: "c3")

puts "🏘️ Seeding groups..."
group1 = Group.create(name: 'Travel', description: 'This group is for people who like to travel.', user: user2)
group2 = Group.create(name: 'Dance', description: 'This group is for people who like to dance.', user: user3)
group3 = Group.create(name: 'Dogs', description: 'This group is for people who like dogs.', user: user1)

puts "👥🏘️ Seeding user_groups..."
userGroup1 = UsersGroup.create(user: user1, group: group1)
userGroup2 = UsersGroup.create(user: user3, group: group2)
userGroup3 = UsersGroup.create(user: user2, group: group3)

puts "📬 Seeding posts..."
post1 = Post.create(title: 'hello1', content: 'first time on here', image: 'hello1', user: user1, group: group3)
post2 = Post.create(title: 'hello2', content: 'second time on here', image: 'hello2', user: user2, group: group2)
post3 = Post.create(title: 'hello3', content: 'third time on here', image: 'hello3', user: user3, group: group1)

puts "Seeding done!"
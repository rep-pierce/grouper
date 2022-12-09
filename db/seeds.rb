puts "Deleting Group/User/Post data..."
User.destroy_all
Group.destroy_all
UsersGroup.destroy_all
Post.destroy_all

# Returns the hash digest of the given string. Seeding won't woork without this
def User.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end

puts "👥 Seeding users..."
# test users have same password
user1 = User.create(first_name: 'Caitlin', last_name: 'Smith', username: 'csmith', age: 23, password_digest: User.digest('foobar'))
user2 = User.create(first_name: 'Daniel', last_name: 'Jones', username: 'djones', age: 35, password_digest: User.digest('foobar'))
user3 = User.create(first_name: 'Ann', last_name: 'Williams', username: 'awilliams', age: 28, password_digest: User.digest('foobar'))

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
post4 = Post.create(title: 'hello4', content: 'second post!', image: 'booyah', user: user1, group: group3)
post5 = Post.create(title: 'hello5', content: 'hi im user2', image: 'bazinga', user: user2, group: group2)
post6 = Post.create(title: 'hello6', content: 'hello from user3', image: 'bam', user: user3, group: group1)

puts "Seeding done!"
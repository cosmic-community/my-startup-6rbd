import TeamCard from '@/components/TeamCard'
import { getTeamMembers } from '@/lib/cosmic'

export const metadata = {
  title: 'Team - My Startup',
}

export default async function TeamPage() {
  const team = await getTeamMembers()

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">The talented people behind our success</p>
        </div>
        {team.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(member => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No team members available.</p>
        )}
      </div>
    </div>
  )
}
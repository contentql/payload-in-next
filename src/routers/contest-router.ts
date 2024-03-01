import { getPayloadClient } from '../get-payload';
import { ContestIdValidator } from '../lib/validators/contest-id-validator';
import { publicProcedure, router } from '../trpc/trpc';
export const contestRouter = router({
    getContests: publicProcedure.query(async() => {

        const payload = await getPayloadClient()
        
        const contest = await payload.find({ collection: 'contest' });

        const allcontests = contest.docs.map(({
            id,
            title,
            contest_no,
            day_remain,
            tag,
            ticket_price,
            ticket_remain,
            updatedAt,
            createdAt,
        }) => {
            return {
              id: id,
              title: title,
              contest_no: contest_no,
              day_remain: day_remain,
              tag: tag,
              ticket_remain: ticket_remain,
              ticket_price: ticket_price,
              updatedAt: updatedAt,
              createdAt: createdAt,
            };
        })
        return allcontests;
    }),

    getContestById: publicProcedure
    .input(ContestIdValidator)
    .query(async ({ input }) => {
      const payload = await getPayloadClient();

      const contestById = await payload.find({
        collection: 'contest',
        where: {
          id: {
            equals: input?.id,
          },
        },
      });
      return contestById;
    }),
})
    


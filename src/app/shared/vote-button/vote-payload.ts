import { VoteType } from './vote-type';

export class VotePayload {
    voteType: VoteType = VoteType.UNDEFIEND;
    postId: number=0;
}
export interface GitHubCommit {
  readonly nodeId: string;
  readonly sha: string;
  readonly committedBy: {
    name: string;
    avatar: string;
  };
  readonly message: string;
  readonly createdAt: Date;
}

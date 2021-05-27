(function() {var implementors = {};
implementors["account"] = [{"text":"impl Sync for EthereumSignature","synthetic":true,"types":[]},{"text":"impl Sync for EthereumSigner","synthetic":true,"types":[]}];
implementors["moonbase_runtime"] = [{"text":"impl Sync for SessionKeys","synthetic":true,"types":[]},{"text":"impl Sync for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Sync for Version","synthetic":true,"types":[]},{"text":"impl Sync for BlockWeights","synthetic":true,"types":[]},{"text":"impl Sync for BlockLength","synthetic":true,"types":[]},{"text":"impl Sync for SS58Prefix","synthetic":true,"types":[]},{"text":"impl Sync for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Sync for MaxLocks","synthetic":true,"types":[]},{"text":"impl Sync for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Sync for DealWithFees&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Sync for MoonbeamGasWeightMapping","synthetic":true,"types":[]},{"text":"impl Sync for BlockGasLimit","synthetic":true,"types":[]},{"text":"impl Sync for FixedGasPrice","synthetic":true,"types":[]},{"text":"impl Sync for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl Sync for CouncilMotionDuration","synthetic":true,"types":[]},{"text":"impl Sync for CouncilMaxProposals","synthetic":true,"types":[]},{"text":"impl Sync for CouncilMaxMembers","synthetic":true,"types":[]},{"text":"impl Sync for TechComitteeMotionDuration","synthetic":true,"types":[]},{"text":"impl Sync for TechComitteeMaxProposals","synthetic":true,"types":[]},{"text":"impl Sync for TechComitteeMaxMembers","synthetic":true,"types":[]},{"text":"impl Sync for LaunchPeriod","synthetic":true,"types":[]},{"text":"impl Sync for VotingPeriod","synthetic":true,"types":[]},{"text":"impl Sync for FastTrackVotingPeriod","synthetic":true,"types":[]},{"text":"impl Sync for EnactmentPeriod","synthetic":true,"types":[]},{"text":"impl Sync for CooloffPeriod","synthetic":true,"types":[]},{"text":"impl Sync for MinimumDeposit","synthetic":true,"types":[]},{"text":"impl Sync for MaxVotes","synthetic":true,"types":[]},{"text":"impl Sync for MaxProposals","synthetic":true,"types":[]},{"text":"impl Sync for PreimageByteDeposit","synthetic":true,"types":[]},{"text":"impl Sync for InstantAllowed","synthetic":true,"types":[]},{"text":"impl Sync for ProposalBond","synthetic":true,"types":[]},{"text":"impl Sync for ProposalBondMinimum","synthetic":true,"types":[]},{"text":"impl Sync for SpendPeriod","synthetic":true,"types":[]},{"text":"impl Sync for CommunityTreasuryId","synthetic":true,"types":[]},{"text":"impl Sync for ParachainBondPalletId","synthetic":true,"types":[]},{"text":"impl Sync for MaxApprovals","synthetic":true,"types":[]},{"text":"impl Sync for TransactionConverter","synthetic":true,"types":[]},{"text":"impl Sync for ReservedXcmpWeight","synthetic":true,"types":[]},{"text":"impl Sync for MinBlocksPerRound","synthetic":true,"types":[]},{"text":"impl Sync for DefaultBlocksPerRound","synthetic":true,"types":[]},{"text":"impl Sync for BondDuration","synthetic":true,"types":[]},{"text":"impl Sync for MinSelectedCandidates","synthetic":true,"types":[]},{"text":"impl Sync for MaxNominatorsPerCollator","synthetic":true,"types":[]},{"text":"impl Sync for MaxCollatorsPerNominator","synthetic":true,"types":[]},{"text":"impl Sync for DefaultCollatorCommission","synthetic":true,"types":[]},{"text":"impl Sync for MinCollatorStk","synthetic":true,"types":[]},{"text":"impl Sync for MinNominatorStk","synthetic":true,"types":[]},{"text":"impl Sync for VestingPeriod","synthetic":true,"types":[]},{"text":"impl Sync for MinimumReward","synthetic":true,"types":[]},{"text":"impl Sync for Initialized","synthetic":true,"types":[]},{"text":"impl Sync for InitializationPayment","synthetic":true,"types":[]},{"text":"impl Sync for DepositAmount","synthetic":true,"types":[]},{"text":"impl Sync for ProxyDepositBase","synthetic":true,"types":[]},{"text":"impl Sync for ProxyDepositFactor","synthetic":true,"types":[]},{"text":"impl Sync for MaxProxies","synthetic":true,"types":[]},{"text":"impl Sync for AnnouncementDepositBase","synthetic":true,"types":[]},{"text":"impl Sync for AnnouncementDepositFactor","synthetic":true,"types":[]},{"text":"impl Sync for MaxPending","synthetic":true,"types":[]},{"text":"impl Sync for ProxyType","synthetic":true,"types":[]},{"text":"impl Sync for Runtime","synthetic":true,"types":[]},{"text":"impl Sync for Event","synthetic":true,"types":[]},{"text":"impl !Sync for Origin","synthetic":true,"types":[]},{"text":"impl Sync for OriginCaller","synthetic":true,"types":[]},{"text":"impl Sync for PalletInfo","synthetic":true,"types":[]},{"text":"impl Sync for Call","synthetic":true,"types":[]},{"text":"impl Sync for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Sync for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT, C:&nbsp;CallApiAt&lt;Block&gt;&gt; Sync for RuntimeApiImpl&lt;Block, C&gt;","synthetic":false,"types":[]}];
implementors["moonbeam_cli"] = [{"text":"impl Sync for Subcommand","synthetic":true,"types":[]},{"text":"impl Sync for BuildSpecCommand","synthetic":true,"types":[]},{"text":"impl Sync for ExportGenesisStateCommand","synthetic":true,"types":[]},{"text":"impl Sync for ExportGenesisWasmCommand","synthetic":true,"types":[]},{"text":"impl Sync for RunCmd","synthetic":true,"types":[]},{"text":"impl Sync for Cli","synthetic":true,"types":[]},{"text":"impl Sync for RelayChainCli","synthetic":true,"types":[]}];
implementors["moonbeam_cli_opt"] = [{"text":"impl Sync for Sealing","synthetic":true,"types":[]},{"text":"impl Sync for EthApi","synthetic":true,"types":[]},{"text":"impl Sync for RpcParams","synthetic":true,"types":[]}];
implementors["moonbeam_evm_tracer"] = [{"text":"impl Sync for CallListTracer","synthetic":true,"types":[]},{"text":"impl Sync for RawTracer","synthetic":true,"types":[]}];
implementors["moonbeam_rpc_core_debug"] = [{"text":"impl Sync for TraceParams","synthetic":true,"types":[]}];
implementors["moonbeam_rpc_core_trace"] = [{"text":"impl Sync for FilterRequest","synthetic":true,"types":[]},{"text":"impl Sync for RequestBlockId","synthetic":true,"types":[]},{"text":"impl Sync for RequestBlockTag","synthetic":true,"types":[]}];
implementors["moonbeam_rpc_core_txpool"] = [{"text":"impl Sync for Transaction","synthetic":true,"types":[]},{"text":"impl Sync for Summary","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for TxPoolResult&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["moonbeam_rpc_debug"] = [{"text":"impl Sync for Debug","synthetic":true,"types":[]},{"text":"impl&lt;B, C, BE&gt; Sync for DebugHandler&lt;B, C, BE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BE: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["moonbeam_rpc_primitives_debug"] = [{"text":"impl Sync for TransactionTrace","synthetic":true,"types":[]},{"text":"impl Sync for TransactionTraceAction","synthetic":true,"types":[]},{"text":"impl Sync for TransactionTraceOutput","synthetic":true,"types":[]},{"text":"impl Sync for TransactionTraceResult","synthetic":true,"types":[]},{"text":"impl Sync for TraceType","synthetic":true,"types":[]},{"text":"impl Sync for TransactionTrace","synthetic":true,"types":[]},{"text":"impl Sync for RawStepLog","synthetic":true,"types":[]},{"text":"impl Sync for CallInner","synthetic":true,"types":[]},{"text":"impl Sync for Call","synthetic":true,"types":[]},{"text":"impl Sync for CallResult","synthetic":true,"types":[]},{"text":"impl Sync for CreateResult","synthetic":true,"types":[]},{"text":"impl Sync for CallType","synthetic":true,"types":[]},{"text":"impl Sync for CreateType","synthetic":true,"types":[]}];
implementors["moonbeam_rpc_primitives_txpool"] = [{"text":"impl Sync for TxPoolResponse","synthetic":true,"types":[]}];
implementors["moonbeam_rpc_trace"] = [{"text":"impl&lt;B, C&gt; Sync for Trace&lt;B, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for CacheBatchId","synthetic":true,"types":[]},{"text":"impl Sync for CacheRequester","synthetic":true,"types":[]},{"text":"impl&lt;B, C, BE&gt; Sync for CacheTask&lt;B, C, BE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;BE: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["moonbeam_rpc_txpool"] = [{"text":"impl&lt;B, C, A&gt; Sync for TxPool&lt;B, C, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as ChainApi&gt;::Block as Block&gt;::Extrinsic: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as ChainApi&gt;::Block as Block&gt;::Hash: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["moonbeam_runtime"] = [{"text":"impl Sync for SessionKeys","synthetic":true,"types":[]},{"text":"impl Sync for BaseFilter","synthetic":true,"types":[]},{"text":"impl Sync for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Sync for Version","synthetic":true,"types":[]},{"text":"impl Sync for BlockWeights","synthetic":true,"types":[]},{"text":"impl Sync for BlockLength","synthetic":true,"types":[]},{"text":"impl Sync for SS58Prefix","synthetic":true,"types":[]},{"text":"impl Sync for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Sync for MaxLocks","synthetic":true,"types":[]},{"text":"impl Sync for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Sync for DealWithFees&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Sync for MoonbeamGasWeightMapping","synthetic":true,"types":[]},{"text":"impl Sync for BlockGasLimit","synthetic":true,"types":[]},{"text":"impl Sync for FixedGasPrice","synthetic":true,"types":[]},{"text":"impl Sync for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl Sync for CouncilMotionDuration","synthetic":true,"types":[]},{"text":"impl Sync for CouncilMaxProposals","synthetic":true,"types":[]},{"text":"impl Sync for CouncilMaxMembers","synthetic":true,"types":[]},{"text":"impl Sync for TechComitteeMotionDuration","synthetic":true,"types":[]},{"text":"impl Sync for TechComitteeMaxProposals","synthetic":true,"types":[]},{"text":"impl Sync for TechComitteeMaxMembers","synthetic":true,"types":[]},{"text":"impl Sync for LaunchPeriod","synthetic":true,"types":[]},{"text":"impl Sync for VotingPeriod","synthetic":true,"types":[]},{"text":"impl Sync for FastTrackVotingPeriod","synthetic":true,"types":[]},{"text":"impl Sync for EnactmentPeriod","synthetic":true,"types":[]},{"text":"impl Sync for CooloffPeriod","synthetic":true,"types":[]},{"text":"impl Sync for MinimumDeposit","synthetic":true,"types":[]},{"text":"impl Sync for MaxVotes","synthetic":true,"types":[]},{"text":"impl Sync for MaxProposals","synthetic":true,"types":[]},{"text":"impl Sync for PreimageByteDeposit","synthetic":true,"types":[]},{"text":"impl Sync for InstantAllowed","synthetic":true,"types":[]},{"text":"impl Sync for ProposalBond","synthetic":true,"types":[]},{"text":"impl Sync for ProposalBondMinimum","synthetic":true,"types":[]},{"text":"impl Sync for SpendPeriod","synthetic":true,"types":[]},{"text":"impl Sync for CommunityTreasuryId","synthetic":true,"types":[]},{"text":"impl Sync for ParachainBondPalletId","synthetic":true,"types":[]},{"text":"impl Sync for MaxApprovals","synthetic":true,"types":[]},{"text":"impl Sync for TransactionConverter","synthetic":true,"types":[]},{"text":"impl Sync for ReservedXcmpWeight","synthetic":true,"types":[]},{"text":"impl Sync for MinBlocksPerRound","synthetic":true,"types":[]},{"text":"impl Sync for DefaultBlocksPerRound","synthetic":true,"types":[]},{"text":"impl Sync for BondDuration","synthetic":true,"types":[]},{"text":"impl Sync for MinSelectedCandidates","synthetic":true,"types":[]},{"text":"impl Sync for MaxNominatorsPerCollator","synthetic":true,"types":[]},{"text":"impl Sync for MaxCollatorsPerNominator","synthetic":true,"types":[]},{"text":"impl Sync for DefaultCollatorCommission","synthetic":true,"types":[]},{"text":"impl Sync for MinCollatorStk","synthetic":true,"types":[]},{"text":"impl Sync for MinNominatorStk","synthetic":true,"types":[]},{"text":"impl Sync for VestingPeriod","synthetic":true,"types":[]},{"text":"impl Sync for MinimumReward","synthetic":true,"types":[]},{"text":"impl Sync for Initialized","synthetic":true,"types":[]},{"text":"impl Sync for InitializationPayment","synthetic":true,"types":[]},{"text":"impl Sync for DepositAmount","synthetic":true,"types":[]},{"text":"impl Sync for ProxyDepositBase","synthetic":true,"types":[]},{"text":"impl Sync for ProxyDepositFactor","synthetic":true,"types":[]},{"text":"impl Sync for MaxProxies","synthetic":true,"types":[]},{"text":"impl Sync for AnnouncementDepositBase","synthetic":true,"types":[]},{"text":"impl Sync for AnnouncementDepositFactor","synthetic":true,"types":[]},{"text":"impl Sync for MaxPending","synthetic":true,"types":[]},{"text":"impl Sync for ProxyType","synthetic":true,"types":[]},{"text":"impl Sync for Runtime","synthetic":true,"types":[]},{"text":"impl Sync for Event","synthetic":true,"types":[]},{"text":"impl !Sync for Origin","synthetic":true,"types":[]},{"text":"impl Sync for OriginCaller","synthetic":true,"types":[]},{"text":"impl Sync for PalletInfo","synthetic":true,"types":[]},{"text":"impl Sync for Call","synthetic":true,"types":[]},{"text":"impl Sync for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Sync for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT, C:&nbsp;CallApiAt&lt;Block&gt;&gt; Sync for RuntimeApiImpl&lt;Block, C&gt;","synthetic":false,"types":[]}];
implementors["moonbeam_service"] = [{"text":"impl Sync for Extensions","synthetic":true,"types":[]},{"text":"impl Sync for ExtensionsFork","synthetic":true,"types":[]},{"text":"impl Sync for Client","synthetic":true,"types":[]},{"text":"impl Sync for MoonbeamExecutor","synthetic":true,"types":[]},{"text":"impl Sync for MoonriverExecutor","synthetic":true,"types":[]},{"text":"impl Sync for MoonshadowExecutor","synthetic":true,"types":[]},{"text":"impl Sync for MoonbaseExecutor","synthetic":true,"types":[]},{"text":"impl Sync for TransactionConverters","synthetic":true,"types":[]}];
implementors["moonkey"] = [{"text":"impl Sync for Opts","synthetic":true,"types":[]}];
implementors["moonriver_runtime"] = [{"text":"impl Sync for SessionKeys","synthetic":true,"types":[]},{"text":"impl Sync for BaseFilter","synthetic":true,"types":[]},{"text":"impl Sync for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Sync for Version","synthetic":true,"types":[]},{"text":"impl Sync for BlockWeights","synthetic":true,"types":[]},{"text":"impl Sync for BlockLength","synthetic":true,"types":[]},{"text":"impl Sync for SS58Prefix","synthetic":true,"types":[]},{"text":"impl Sync for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Sync for MaxLocks","synthetic":true,"types":[]},{"text":"impl Sync for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Sync for DealWithFees&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Sync for MoonbeamGasWeightMapping","synthetic":true,"types":[]},{"text":"impl Sync for BlockGasLimit","synthetic":true,"types":[]},{"text":"impl Sync for FixedGasPrice","synthetic":true,"types":[]},{"text":"impl Sync for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl Sync for CouncilMotionDuration","synthetic":true,"types":[]},{"text":"impl Sync for CouncilMaxProposals","synthetic":true,"types":[]},{"text":"impl Sync for CouncilMaxMembers","synthetic":true,"types":[]},{"text":"impl Sync for TechComitteeMotionDuration","synthetic":true,"types":[]},{"text":"impl Sync for TechComitteeMaxProposals","synthetic":true,"types":[]},{"text":"impl Sync for TechComitteeMaxMembers","synthetic":true,"types":[]},{"text":"impl Sync for LaunchPeriod","synthetic":true,"types":[]},{"text":"impl Sync for VotingPeriod","synthetic":true,"types":[]},{"text":"impl Sync for FastTrackVotingPeriod","synthetic":true,"types":[]},{"text":"impl Sync for EnactmentPeriod","synthetic":true,"types":[]},{"text":"impl Sync for CooloffPeriod","synthetic":true,"types":[]},{"text":"impl Sync for MinimumDeposit","synthetic":true,"types":[]},{"text":"impl Sync for MaxVotes","synthetic":true,"types":[]},{"text":"impl Sync for MaxProposals","synthetic":true,"types":[]},{"text":"impl Sync for PreimageByteDeposit","synthetic":true,"types":[]},{"text":"impl Sync for InstantAllowed","synthetic":true,"types":[]},{"text":"impl Sync for ProposalBond","synthetic":true,"types":[]},{"text":"impl Sync for ProposalBondMinimum","synthetic":true,"types":[]},{"text":"impl Sync for SpendPeriod","synthetic":true,"types":[]},{"text":"impl Sync for CommunityTreasuryId","synthetic":true,"types":[]},{"text":"impl Sync for ParachainBondPalletId","synthetic":true,"types":[]},{"text":"impl Sync for MaxApprovals","synthetic":true,"types":[]},{"text":"impl Sync for TransactionConverter","synthetic":true,"types":[]},{"text":"impl Sync for ReservedXcmpWeight","synthetic":true,"types":[]},{"text":"impl Sync for MinBlocksPerRound","synthetic":true,"types":[]},{"text":"impl Sync for DefaultBlocksPerRound","synthetic":true,"types":[]},{"text":"impl Sync for BondDuration","synthetic":true,"types":[]},{"text":"impl Sync for MinSelectedCandidates","synthetic":true,"types":[]},{"text":"impl Sync for MaxNominatorsPerCollator","synthetic":true,"types":[]},{"text":"impl Sync for MaxCollatorsPerNominator","synthetic":true,"types":[]},{"text":"impl Sync for DefaultCollatorCommission","synthetic":true,"types":[]},{"text":"impl Sync for MinCollatorStk","synthetic":true,"types":[]},{"text":"impl Sync for MinNominatorStk","synthetic":true,"types":[]},{"text":"impl Sync for VestingPeriod","synthetic":true,"types":[]},{"text":"impl Sync for MinimumReward","synthetic":true,"types":[]},{"text":"impl Sync for Initialized","synthetic":true,"types":[]},{"text":"impl Sync for InitializationPayment","synthetic":true,"types":[]},{"text":"impl Sync for DepositAmount","synthetic":true,"types":[]},{"text":"impl Sync for ProxyDepositBase","synthetic":true,"types":[]},{"text":"impl Sync for ProxyDepositFactor","synthetic":true,"types":[]},{"text":"impl Sync for MaxProxies","synthetic":true,"types":[]},{"text":"impl Sync for AnnouncementDepositBase","synthetic":true,"types":[]},{"text":"impl Sync for AnnouncementDepositFactor","synthetic":true,"types":[]},{"text":"impl Sync for MaxPending","synthetic":true,"types":[]},{"text":"impl Sync for ProxyType","synthetic":true,"types":[]},{"text":"impl Sync for Runtime","synthetic":true,"types":[]},{"text":"impl Sync for Event","synthetic":true,"types":[]},{"text":"impl !Sync for Origin","synthetic":true,"types":[]},{"text":"impl Sync for OriginCaller","synthetic":true,"types":[]},{"text":"impl Sync for PalletInfo","synthetic":true,"types":[]},{"text":"impl Sync for Call","synthetic":true,"types":[]},{"text":"impl Sync for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Sync for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT, C:&nbsp;CallApiAt&lt;Block&gt;&gt; Sync for RuntimeApiImpl&lt;Block, C&gt;","synthetic":false,"types":[]}];
implementors["moonshadow_runtime"] = [{"text":"impl Sync for SessionKeys","synthetic":true,"types":[]},{"text":"impl Sync for BaseFilter","synthetic":true,"types":[]},{"text":"impl Sync for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Sync for Version","synthetic":true,"types":[]},{"text":"impl Sync for BlockWeights","synthetic":true,"types":[]},{"text":"impl Sync for BlockLength","synthetic":true,"types":[]},{"text":"impl Sync for SS58Prefix","synthetic":true,"types":[]},{"text":"impl Sync for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Sync for MaxLocks","synthetic":true,"types":[]},{"text":"impl Sync for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Sync for DealWithFees&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Sync for MoonbeamGasWeightMapping","synthetic":true,"types":[]},{"text":"impl Sync for BlockGasLimit","synthetic":true,"types":[]},{"text":"impl Sync for FixedGasPrice","synthetic":true,"types":[]},{"text":"impl Sync for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl Sync for CouncilMotionDuration","synthetic":true,"types":[]},{"text":"impl Sync for CouncilMaxProposals","synthetic":true,"types":[]},{"text":"impl Sync for CouncilMaxMembers","synthetic":true,"types":[]},{"text":"impl Sync for TechComitteeMotionDuration","synthetic":true,"types":[]},{"text":"impl Sync for TechComitteeMaxProposals","synthetic":true,"types":[]},{"text":"impl Sync for TechComitteeMaxMembers","synthetic":true,"types":[]},{"text":"impl Sync for LaunchPeriod","synthetic":true,"types":[]},{"text":"impl Sync for VotingPeriod","synthetic":true,"types":[]},{"text":"impl Sync for FastTrackVotingPeriod","synthetic":true,"types":[]},{"text":"impl Sync for EnactmentPeriod","synthetic":true,"types":[]},{"text":"impl Sync for CooloffPeriod","synthetic":true,"types":[]},{"text":"impl Sync for MinimumDeposit","synthetic":true,"types":[]},{"text":"impl Sync for MaxVotes","synthetic":true,"types":[]},{"text":"impl Sync for MaxProposals","synthetic":true,"types":[]},{"text":"impl Sync for PreimageByteDeposit","synthetic":true,"types":[]},{"text":"impl Sync for InstantAllowed","synthetic":true,"types":[]},{"text":"impl Sync for ProposalBond","synthetic":true,"types":[]},{"text":"impl Sync for ProposalBondMinimum","synthetic":true,"types":[]},{"text":"impl Sync for SpendPeriod","synthetic":true,"types":[]},{"text":"impl Sync for CommunityTreasuryId","synthetic":true,"types":[]},{"text":"impl Sync for ParachainBondPalletId","synthetic":true,"types":[]},{"text":"impl Sync for MaxApprovals","synthetic":true,"types":[]},{"text":"impl Sync for TransactionConverter","synthetic":true,"types":[]},{"text":"impl Sync for ReservedXcmpWeight","synthetic":true,"types":[]},{"text":"impl Sync for MinBlocksPerRound","synthetic":true,"types":[]},{"text":"impl Sync for DefaultBlocksPerRound","synthetic":true,"types":[]},{"text":"impl Sync for BondDuration","synthetic":true,"types":[]},{"text":"impl Sync for MinSelectedCandidates","synthetic":true,"types":[]},{"text":"impl Sync for MaxNominatorsPerCollator","synthetic":true,"types":[]},{"text":"impl Sync for MaxCollatorsPerNominator","synthetic":true,"types":[]},{"text":"impl Sync for DefaultCollatorCommission","synthetic":true,"types":[]},{"text":"impl Sync for MinCollatorStk","synthetic":true,"types":[]},{"text":"impl Sync for MinNominatorStk","synthetic":true,"types":[]},{"text":"impl Sync for VestingPeriod","synthetic":true,"types":[]},{"text":"impl Sync for MinimumReward","synthetic":true,"types":[]},{"text":"impl Sync for Initialized","synthetic":true,"types":[]},{"text":"impl Sync for InitializationPayment","synthetic":true,"types":[]},{"text":"impl Sync for DepositAmount","synthetic":true,"types":[]},{"text":"impl Sync for ProxyDepositBase","synthetic":true,"types":[]},{"text":"impl Sync for ProxyDepositFactor","synthetic":true,"types":[]},{"text":"impl Sync for MaxProxies","synthetic":true,"types":[]},{"text":"impl Sync for AnnouncementDepositBase","synthetic":true,"types":[]},{"text":"impl Sync for AnnouncementDepositFactor","synthetic":true,"types":[]},{"text":"impl Sync for MaxPending","synthetic":true,"types":[]},{"text":"impl Sync for ProxyType","synthetic":true,"types":[]},{"text":"impl Sync for Runtime","synthetic":true,"types":[]},{"text":"impl Sync for Event","synthetic":true,"types":[]},{"text":"impl !Sync for Origin","synthetic":true,"types":[]},{"text":"impl Sync for OriginCaller","synthetic":true,"types":[]},{"text":"impl Sync for PalletInfo","synthetic":true,"types":[]},{"text":"impl Sync for Call","synthetic":true,"types":[]},{"text":"impl Sync for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Sync for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT, C:&nbsp;CallApiAt&lt;Block&gt;&gt; Sync for RuntimeApiImpl&lt;Block, C&gt;","synthetic":false,"types":[]}];
implementors["pallet_author_mapping"] = [{"text":"impl&lt;T&gt; Sync for Pallet&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Event&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AuthorId: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for GenesisConfig&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AuthorId: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AuthorId: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_ethereum_chain_id"] = [{"text":"impl&lt;T&gt; Sync for Pallet&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for GenesisConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for _GeneratedPrefixForStorageChainId&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["parachain_staking"] = [{"text":"impl&lt;T&gt; Sync for Range&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Balance&gt; Sync for InflationInfo&lt;Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for SubstrateWeight&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Pallet&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Sync for Bond&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for CollatorStatus","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Sync for CollatorSnapshot&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Sync for Collator&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Sync for Nominator&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;BlockNumber&gt; Sync for RoundInfo&lt;BlockNumber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Event&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Currency as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::BlockNumber: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for GenesisConfig&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Currency as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Currency as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for _GeneratedPrefixForStorageAtStake&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for _GeneratedPrefixForStorageStaked&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for _GeneratedPrefixForStorageInflationConfig&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for _GeneratedPrefixForStoragePoints&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for _GeneratedPrefixForStorageAwardedPts&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["precompiles"] = [{"text":"impl&lt;R&gt; Sync for MoonbeamPrecompiles&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
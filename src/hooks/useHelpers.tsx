import React from 'react'
import { Typography } from 'antd'
import {useConfigs} from "../store/configs/hooks/useConfigs";

export const useHelpers = () => {
  const { configs } = useConfigs()

  const messageAndViewOnBsc = ({
    title,
    message,
    hash,
  }: {
    title: string
    message?: string
    hash?: string
  }) => {
    return (
      <div>
        <Typography.Title level={5}>{title}</Typography.Title>
        {message && <Typography.Text className="mt-1">{message}</Typography.Text>}
        {hash && (
          <p className="mt-1">
            <a href={`${configs.chainConfigs.explorer}/tx/${hash}`} className="bsc-link" target="_blank" rel="noreferrer">
              View on BscScan
            </a>
          </p>
        )}
      </div>
    )
  }

  return {
    messageAndViewOnBsc,
  }
}

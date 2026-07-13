import { Grid, Typography, TextField, Button, Box, colors, IconButton, Tooltip } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import HelpIcon from '@mui/icons-material/Help';
import { useId } from 'react';

export const QuestionCard = ({ questionNumber, question, labels, value, onChange, backQuestion, buttonText, onClick }) => {
    return (
        <>
        <Box sx={{minHeight:"90vh", display:'flex', justifyContent:'center', alignItems:'center',mx:"auto"}}> 
            <Card sx={{width:"60%", height:"70%"}}>
                <CardContent>
                    <Grid container sx={{justifyContent:'center', alignItems:'center'}}>
                        <Grid item>
                            <Typography sx={{ color: '#8F7FEE', mb:1, ml:15 }}>{questionNumber}/8</Typography>
                            <Typography id="goalSucsessKpi" sx={{mb:2}}>{question}</Typography>
                            {
                                labels.map(label =>
                                    <div key={label.label}>
                                    {label.description && (
                                   <Tooltip title={label.description} key={label.label}>
                                        <HelpIcon/>
                                    </Tooltip>
                                    )}
                            <TextField
                                key={label.label}
                                required
                                aria-describedby='goalSucsessKpi'
                                multiline
                                minRows={2}
                                value={value} onChange={onChange}
                                fullWidth
                                label={label.label}
                                slotProps={{ inputLabel: { shrink: true}}}
                                sx={{mt:3, mb:5}}
                            />
                            </div>
                              )}
                            {backQuestion}
                            <Button variant="contained" sx={{ mt:5, ml:5, backgroundColor: '#ADF0C7', color: '#1F1F1F' }} onClick={onClick}>{buttonText}</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            </Box>
            {/* <Card sx={{ mb: 5 }}>
                <CardContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography sx={{ color: '#8F7FEE' }}>2/8</Typography>
                            <Typography id="goalChallenges">ゴールを実現する上での課題点を入力してください</Typography>
                            <TextField
                                required
                                describedby='goalChallenges'
                                multiline
                                minRows={2}
                                maxRows={4}
                                sx={{ width: "80%" }}
                                value={value} onChange={onChange}
                            />
                            <Button variant="contained" sx={{ backgroundColor: '#ADF0C7', color: '#1F1F1F' }}>質問3へ</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card sx={{ mb: 5 }}>
                <CardContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography sx={{ color: '#8F7FEE' }}>3/8</Typography>
                            <Typography id="SystemUseUser">システムを使用する対象ユーザーを入力してください</Typography>
                            <TextField
                                required
                                describedby='SystemUseUser'
                                multiline
                                minRows={2}
                                maxRows={4}
                                sx={{ width: "80%" }}
                                value={value} onChange={onChange}
                            />
                            <Button variant="contained" sx={{ backgroundColor: '#ADF0C7', color: '#1F1F1F' }}>質問4へ</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card sx={{ mb: 5 }}>
                <CardContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography sx={{ color: '#8F7FEE' }}>4/8</Typography>
                            <Typography id="SystemUseCase">システムの利用シーンを入力してください</Typography>
                            <TextField
                                required
                                describedby='SystemUseCase'
                                multiline
                                minRows={2}
                                maxRows={4}
                                sx={{ width: "80%" }}
                                value={value} onChange={onChange}
                            />
                            <Button variant="contained" sx={{ backgroundColor: '#ADF0C7', color: '#1F1F1F' }}>質問5へ</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card sx={{ mb: 5 }}>
                <CardContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography sx={{ color: '#8F7FEE' }}>5/8</Typography>
                            <Typography>機能要件と非機能要件を入力してください</Typography>
                            <TextField
                                required
                                multiline
                                id='functionalRequirement'
                                label="機能要件"
                                minRows={2}
                                maxRows={4}
                                sx={{ width: "80%", mb: 3 }}
                                value={value} onChange={onChange}
                            />
                            <TextField
                                required
                                multiline
                                id='nonFunctionalRequirement'
                                label="非機能要件"
                                minRows={2}
                                maxRows={4}
                                sx={{ width: "80%" }}
                            />
                            <Button variant="contained" sx={{ backgroundColor: '#ADF0C7', color: '#1F1F1F' }}>質問6へ</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card sx={{ mb: 5 }}>
                <CardContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography sx={{ color: '#8F7FEE' }}>6/8</Typography>
                            <Typography id="Constraints">制約条件を入力してください</Typography>
                            <TextField
                                required
                                describedby='Constraints'
                                multiline
                                minRows={2}
                                maxRows={4}
                                sx={{ width: "80%" }}
                                value={value} onChange={onChange}
                            />
                            <Button variant="contained" sx={{ backgroundColor: '#ADF0C7', color: '#1F1F1F' }}>質問7へ</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card sx={{ mb: 5 }}>
                <CardContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography sx={{ color: '#8F7FEE' }}>7/8</Typography>
                            <Typography id="stakeholders">ステークホルダーを入力してください</Typography>
                            <TextField
                                required
                                describedby='stakeholders'
                                multiline
                                minRows={2}
                                maxRows={4}
                                sx={{ width: "80%" }}
                                value={value} onChange={onChange}
                            />
                            <Button variant="contained" sx={{ backgroundColor: '#ADF0C7', color: '#1F1F1F' }}>不足点検知</Button>
                            <Button variant="contained" sx={{ backgroundColor: '#ADF0C7', color: '#1F1F1F' }}>プロジェクト名入力</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card sx={{ mb: 5 }}>
                <CardContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography sx={{ color: '#8F7FEE' }}>8/8</Typography>
                            <Typography id="stakeholders">プロジェクト名を入力してください</Typography>
                            <TextField
                                required
                                describedby='stakeholders'
                                multiline
                                minRows={2}
                                maxRows={4}
                                sx={{ width: "80%" }}
                                value={value} onChange={onChange}
                            />
                            <Button variant="contained" sx={{ backgroundColor: '#ADF0C7', color: '#1F1F1F' }}>保存して一覧へ</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card> */}
        </>
    );
}

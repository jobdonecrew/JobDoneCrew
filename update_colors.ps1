$files = @(
    "src\components\industrial-landing.tsx",
    "src\components\industrial\industrial-contact-form.tsx",
    "src\components\project-gallery.tsx",
    "src\components\industrial\industrial-testimonials.tsx",
    "src\components\industrial\industrial-faq.tsx",
    "src\app\@modal\(.)projects\[slug]\page.tsx",
    "src\components\ui\carousel.tsx",
    "src\app\projects\[slug]\page.tsx"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw -Encoding UTF8
        $newContent = $content -replace "amber-500", "amber-600"
        Set-Content $file -Value $newContent -Encoding UTF8
        Write-Host "Updated $file"
    } else {
        Write-Host "File not found: $file"
    }
}
